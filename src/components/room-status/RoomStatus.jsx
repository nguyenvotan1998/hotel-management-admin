import "./room-status.scss";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import RoomSettingList from "../setting/room-settings/RoomSettingList";
import { Room } from "@mui/icons-material";
// import Dropdown from "../drop/Dropdown";

export default function RoomStatus(props) {
   const [openSetting, setOpenSetting] = useState(false);

   const handleSetting = (e) => {
      e.stopPropagation();
      setOpenSetting(!openSetting);
   };

   return (
      <div
         className="room-status"
         onClick={() => alert("Click vào roomstatus")}
      >
         <div className="room-status__header">
            <div className="room-status__room-number">{props.roomNumber}</div>
            <div className="room-status__total-time">{props.totalTime}</div>
            <div className="status-icons">{props.statusIcon}</div>
            <div className="room-status__start-day">{props.startDay}</div>
            <div className="room-status__end-day">{props.endDay}</div>
         </div>
         <div className="room-status__body">{props.customerName}</div>
         <div className="room-status__footer">
            <div
               className="room-status__color"
               onClick={props.changeColor}
            ></div>
            <div className="room-status__setting" onClick={handleSetting}>
               {openSetting ? (
                  <>
                     <IoIosArrowUp />
                     <RoomSettingList roomNumber={props.roomNumber} />
                  </>
               ) : (
                  <IoIosArrowDown />
               )}
            </div>
         </div>
      </div>
   );
}

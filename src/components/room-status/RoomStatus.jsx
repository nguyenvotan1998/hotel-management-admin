import "./room-status.scss";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import RoomSettingList from "../setting/room-settings/RoomSettingList";
import FormCheckIn from "../form/check-in/CheckIn";
import Hours from "../form/check-out/Hours";

export default function RoomStatus(props) {
   const [openSetting, setOpenSetting] = useState(false);
   const [openForm, setOpenForm] = useState(false);

   const handleSetting = (e) => {
      e.stopPropagation();
      setOpenSetting(!openSetting);
   };

   return (
      <div
         className="room-status"
         //fix error display background-color
         style={{ backgroundColor: `${props.bg}` }}
         onClick={() => setOpenForm(true)}
      >
         {openForm && props.status === "empty" && (
            <FormCheckIn
               setOpen={setOpenForm}
               roomNumber={props.roomNumber}
               rooms={props.rooms}
               status={props.status}
            />
         )}
         {openForm && props.status === "hours" && (
            <Hours
               setOpen={setOpenForm}
               roomNumber={props.roomNumber}
               rooms={props.rooms}
               status={props.status}
            />
         )}
         <div className="room-status__header">
            <div className="room-status__room-number">
               <span>{props.roomNumber}</span>
            </div>
            {props.status === "hours" ? (
               <>
                  <div className="room-status__total-time">
                     {props.totalTime}
                  </div>
               </>
            ) : (
               <></>
            )}
            <div className="room-status__status-icons">{props.statusIcon}</div>
            <div className="room-status__time-stay">
               {props.status === "empty" ? (
                  <></>
               ) : (
                  <>
                     <div className="room-status__start-day">
                        {props.startDay}
                     </div>
                     <BsDash />
                     <div className="room-status__end-day">
                        {props.endDay ? props.endDay : "--:--"}
                     </div>
                  </>
               )}
            </div>
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

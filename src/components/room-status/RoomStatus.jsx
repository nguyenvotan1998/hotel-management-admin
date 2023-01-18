import "./room-status.scss";
import { useState, useEffect, memo } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import RoomSettingList from "../setting/room-settings/RoomSettingList";
import FormCheckIn from "../form/check-in/CheckIn";
import CheckOut from "../form/check-out/CheckOut";

function formatDate(value) {
   const array = value.split("-");
   return array[2] + "/" + array[1];
}

function RoomStatus(props) {
   const [openSetting, setOpenSetting] = useState(false);
   const [openForm, setOpenForm] = useState(false);

   const handleSetting = (e) => {
      e.stopPropagation();
      setOpenSetting(!openSetting);
   };
   const handleDbClick = () => {
      fetch(`http://localhost:8000/room-status/${props.status.id}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            ...props.status,
            status: "empty",
         }),
      });
      window.location.reload();
   };

   return (
      <div
         className="room-status"
         style={{ backgroundColor: `${props.bg}` }}
         onClick={() => setOpenForm(true)}
         onDoubleClick={handleDbClick}
      >
         {props.status.status === "empty"
            ? openForm && (
                 <FormCheckIn setOpen={setOpenForm} status={props.status} />
              )
            : props.status.status === "using"
            ? openForm && (
                 <CheckOut setOpen={setOpenForm} status={props.status} />
              )
            : null}
         <div className="room-status__header">
            <div className="room-status__room-number">
               <span>{props.status.room}</span>
            </div>
            {props.status.method === "hours" ? (
               <>
                  <div className="room-status__total-time">
                     {props.totalTime}
                  </div>
               </>
            ) : (
               <></>
            )}
            <div className="room-status__status-icons">{props.iconStatus}</div>
            <div className="room-status__time-stay">
               {props.status.status === "empty" ||
               props.status.status === "notclean" ? null : (
                  <>
                     <div>
                        <div className="room-status__date-in">
                           {props.status.dateIn
                              ? formatDate(props.status.dateIn)
                              : null}
                        </div>
                        <BsDash />
                        <div className="room-status__date-out">
                           {props.status.dateOut
                              ? formatDate(props.status.dateOut)
                              : "--/--"}
                        </div>
                     </div>

                     <div>
                        <div className="room-status__hour-in">
                           {props.status.hourIn}
                        </div>
                        <BsDash />
                        <div className="room-status__hour-out">
                           {props.status.hourOut
                              ? props.status.hourOut
                              : "--:--"}
                        </div>
                     </div>
                  </>
               )}
            </div>
            <div className="room-status__time-total">
               <div className="date-total">{props.dateTotal}</div>
               <div className="hour-total">{props.hourTotal}</div>
            </div>
         </div>
         <div className="room-status__body">
            <div className="room-status__customer-name">
               {props.status.customer}
            </div>
            {props.status.prepay ? (
               <BsCheck2Circle className="room-status__prepay" />
            ) : null}
         </div>
         <div className="room-status__footer">
            <div
               className="room-status__color"
               onClick={props.changeColor}
            ></div>
            <div className="room-status__setting" onClick={handleSetting}>
               {openSetting ? (
                  <>
                     <IoIosArrowUp />
                     <RoomSettingList room={props.status.room} />
                  </>
               ) : (
                  <IoIosArrowDown />
               )}
            </div>
         </div>
      </div>
   );
}

export default memo(RoomStatus);

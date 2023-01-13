import "./room-status.scss";
import { useState, useEffect, memo } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import RoomSettingList from "../setting/room-settings/RoomSettingList";
import FormCheckIn from "../form/check-in/CheckIn";
import Hours from "../form/check-out/Hours";
import Days from "../form/check-out/Days";
function Clock() {
   const [time, setTime] = useState();

   useEffect(() => {
      setInterval(() => {
         const dateObject = new Date();

         const hour = dateObject.getHours();
         const minute = dateObject.getMinutes();
         const second = dateObject.getSeconds();

         const currentTime = hour + " : " + minute + " : " + second;

         setTime(currentTime);
      }, 1000);
   }, []);

   return { time };
}

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

   return (
      <div
         className="room-status"
         //fix error display background-color
         style={{ backgroundColor: `${props.bg}` }}
         onClick={() => setOpenForm(true)}
      >
         {props.status.status === "empty"
            ? openForm && (
                 <FormCheckIn setOpen={setOpenForm} status={props.status} />
              )
            : props.status === "using" && props.method === "hours"
            ? openForm && (
                 <Hours
                    setOpen={setOpenForm}
                    roomNumber={props.roomNumber}
                    rooms={props.rooms}
                    customerName={props.customerName}
                    hourIn={props.startDay}
                    status={props.status}
                 />
              )
            : props.status.status === "using" && props.status.method === "days"
            ? openForm && (
                 <Days
                    setOpen={setOpenForm}
                    roomNumber={props.roomNumber}
                    rooms={props.rooms}
                    customerName={props.customerName}
                    dateIn={props.startDay}
                    hourIn={props.hourIn}
                    status={props.status}
                 />
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
            {/* <div className="room-status__status-icons">{props.statusIcon}</div> */}
            <div className="room-status__time-stay">
               {props.status.status === "empty" ? null : (
                  <>
                     <div>
                        <div className="room-status__date-in">
                           {formatDate(props.status.dateIn)}
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

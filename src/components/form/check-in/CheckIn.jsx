import "./check-in.scss";
import { useEffect, useState, useRef, useMemo, useCallback, memo } from "react";
import Modal from "../../modal/Modal";
import CustomerInfo from "./CustomerInfo";
import RoomInfo from "./RoomInfo";
import { timeNow, dateNow, tomorrow } from "../../../script";
function TimeForm(props) {
   return (
      <>
         <label>
            Vào:
            <div>
               <input
                  type="date"
                  name="dateIn"
                  value={props.dateIn}
                  onChange={props.event}
               />
               <input
                  type="time"
                  name="hourIn"
                  value={props.hourIn}
                  onChange={props.event}
               />
            </div>
         </label>
         <label>
            Ra:
            <div>
               <input
                  type="date"
                  name="dateOut"
                  value={props.dateOut}
                  onChange={props.event}
               />
               <input
                  type="time"
                  name="hourOut"
                  value={props.hourOut}
                  onChange={props.event}
               />
            </div>
         </label>
      </>
   );
}

export default function CheckIn(props) {
   const currentTime = timeNow();
   const currentDate = dateNow();
   const tomorrowDate = tomorrow();
   const userRef = useRef();
   const [roomInfo, setRoomInfo] = useState({
      method: "hours",
      dateIn: "",
      hourIn: "",
      dateOut: "",
      hourOut: "",
      room: props.status.room,
      prepay: "",
      prePayment: "",
      note: "",
   });

   const [cusInfo, setCusInfo] = useState({
      name: "",
      card: "",
      phone: "",
      address: "",
      sex: "Male",
      birthday: "",
   });

   useEffect(() => {
      userRef.current.focus();
   }, []);

   const changeMethod = useMemo(() => {
      switch (roomInfo.method) {
         case "hours":
            setRoomInfo((prev) => ({
               ...prev,
               dateIn: currentDate,
               dateOut: currentDate,
               hourIn: currentTime,
            }));
            break;
         case "days":
            setRoomInfo((prev) => ({
               ...prev,
               dateIn: currentDate,
               dateOut: tomorrowDate,
               hourIn: currentTime,
               hourOut: "12:00",
            }));

            break;
         case "book":
            setRoomInfo((prev) => ({
               ...prev,
               dateIn: currentDate,
               dateOut: tomorrowDate,
               hourIn: "12:00",
               hourOut: "12:00",
            }));
            break;
      }
   }, [roomInfo.method]);

   const handleSubmit = (e) => {
      e.preventDefault();
      Promise.all([
         fetch(`http://localhost:8000/room-status/${props.status.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               ...roomInfo,
               status: "using",
               customer: cusInfo.name,
            }),
         }),
         fetch("http://localhost:8000/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cusInfo),
         }),
      ]);
      props.setOpen((prev) => ({ ...prev, checkin: false }));
      props.onLoad();
   };

   const updateCusInfo = useCallback((e) => {
      setCusInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   const updateRoomInfo = useCallback((e) => {
      setRoomInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   const updatePayment = useCallback((e) => {
      setRoomInfo((prev) => ({ ...prev, prePayment: "cash" }));
   }, []);

   return (
      <Modal
         title="Nhận phòng"
         setOpen={props.setOpen}
         body={
            <>
               <CustomerInfo
                  userRef={userRef}
                  cusInfo={cusInfo}
                  updateCusInfo={updateCusInfo}
               />
               <RoomInfo
                  room={props.status.room}
                  roomInfo={roomInfo}
                  setRoomInfo={setRoomInfo}
                  updatePayment={updatePayment}
                  updateRoomInfo={updateRoomInfo}
               />
            </>
         }
         footer={
            <>
               <button onClick={handleSubmit} className="btn btn-submit">
                  Thực hiện
               </button>
            </>
         }
      />
   );
}

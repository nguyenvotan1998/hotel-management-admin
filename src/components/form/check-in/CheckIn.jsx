import "./check-in.scss";
import { useEffect, useState, useRef } from "react";
import Modal from "../../modal/Modal";
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

function RoomInfo(props) {
   return (
      <div className="container-cus-info">
         <span>Thông tin phòng</span>
         <div className="customer-info">
            <div className="input method">
               <label>
                  Đặt phòng
                  <input
                     id="book"
                     type="radio"
                     name="method"
                     value="book"
                     onChange={props.updateRoomInfo}
                  />
               </label>
               <label>
                  Tính ngày
                  <input
                     id="days"
                     type="radio"
                     name="method"
                     value="days"
                     onChange={props.updateRoomInfo}
                  />
               </label>
               <label>
                  Tính giờ
                  <input
                     id="hours"
                     type="radio"
                     name="method"
                     value="hours"
                     defaultChecked
                     onChange={props.updateRoomInfo}
                  />
               </label>
            </div>
            <div className="input date time">
               {props.roomInfo.method == "book" ? (
                  <TimeForm
                     dateIn={props.roomInfo.dateIn}
                     dateOut={props.roomInfo.dateOut}
                     hourIn={props.roomInfo.hourIn}
                     hourOut={props.roomInfo.hourOut}
                     event={props.updateRoomInfo}
                  />
               ) : props.roomInfo.method == "days" ? (
                  <TimeForm
                     dateIn={props.roomInfo.dateIn}
                     dateOut={props.roomInfo.dateOut}
                     hourIn={props.roomInfo.hourIn}
                     hourOut={props.roomInfo.hourOut}
                     event={props.updateRoomInfo}
                  />
               ) : props.roomInfo.method == "hours" ? (
                  <TimeForm
                     dateIn={props.roomInfo.dateIn}
                     dateOut={props.roomInfo.dateOut}
                     hourIn={props.roomInfo.hourIn}
                     hourOut=""
                     event={props.updateRoomInfo}
                  />
               ) : null}
            </div>
            <label>
               Phòng:
               <p>{props.room}</p>
            </label>
            <label>
               Trả trước:
               <input
                  type="text"
                  className="input room-info"
                  name="prepay"
                  value={props.roomInfo.prepay}
                  onChange={props.updateRoomInfo}
               />
            </label>
            {props.roomInfo.prepay ? (
               props.roomInfo.prePayment === "" ? (
                  props.updatePayment() && (
                     <label>
                        Hình thức:
                        <select
                           className="input room-info"
                           name="prePayment"
                           value={props.roomInfo.prePayment}
                           onChange={props.updateRoomInfo}
                        >
                           <option value="cash">Tiền mặt</option>
                           <option value="tranfer">Chuyển khoản</option>
                        </select>
                     </label>
                  )
               ) : (
                  <label>
                     Hình thức:
                     <select
                        className="input room-info"
                        name="prePayment"
                        value={props.roomInfo.prePayment}
                        onChange={props.updateRoomInfo}
                     >
                        <option value="cash">Tiền mặt</option>
                        <option value="tranfer">Chuyển khoản</option>
                     </select>
                  </label>
               )
            ) : null}
            <label>
               Ghi chú:
               <input
                  type="textarea"
                  className="input room-info"
                  name="note"
                  value={props.roomInfo.note}
                  onChange={props.updateRoomInfo}
               />
            </label>
         </div>
      </div>
   );
}

function CustomerInfo(props) {
   return (
      <div className="container-cus-info">
         <span>Thông tin khách hàng</span>
         <div className="customer-info">
            <input
               id="cusName"
               type="text"
               name="name"
               placeholder="Tên khách hàng"
               ref={props.userRef}
               value={props.cusInfo.name}
               onChange={props.updateCusInfo}
            />
            <input
               id="cusCard"
               type="text"
               name="card"
               placeholder="CMND/CCCD"
               value={props.cusInfo.card}
               onChange={props.updateCusInfo}
            />
            <input
               id="cusPhone"
               type="text"
               name="phone"
               placeholder="Số điện thoại"
               value={props.cusInfo.phone}
               onChange={props.updateCusInfo}
            />
            <input
               type="text"
               name="address"
               placeholder="Địa chỉ"
               value={props.cusInfo.address}
               onChange={props.updateCusInfo}
            />

            <div>
               <div>
                  <label className="sex">
                     Nam
                     <input
                        id="book"
                        value="Male"
                        name="sex"
                        type="radio"
                        defaultChecked
                        onChange={props.updateCusInfo}
                     />
                  </label>
                  <label>
                     Nữ
                     <input
                        id="hours"
                        value="Female"
                        name="sex"
                        type="radio"
                        onChange={props.updateCusInfo}
                     />
                  </label>
               </div>
               <input
                  type="date"
                  name="birthday"
                  value={props.cusInfo.birthday}
                  onChange={props.updateCusInfo}
               />
            </div>
         </div>
      </div>
   );
}

export default function FormCheckIn(props) {
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
      window.location.reload();
   };

   const updateCusInfo = (e) => {
      setCusInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
   const updateRoomInfo = (e) => {
      setRoomInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
   const updatePayment = () => {
      setRoomInfo((prev) => ({ ...prev, prePayment: "cash" }));
   };
   console.log(roomInfo);
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

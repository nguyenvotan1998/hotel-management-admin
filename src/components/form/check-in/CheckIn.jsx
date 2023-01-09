import { useEffect, useState, useRef } from "react";
import Modal from "../../modal/Modal";

function timeNow() {
   const now = new Date();
   const h = now.getHours();
   const m = now.getMinutes();
   const hh = h < 10 ? "0" + h : h;
   const mm = m < 10 ? "0" + m : m;
   return hh + ":" + mm;
}

function dateNow() {
   const now = new Date();
   const y = now.getFullYear();
   const m = now.getMonth() + 1;
   const d = now.getDate();
   const mm = m < 10 ? "0" + m : m;
   const dd = d < 10 ? "0" + d : d;
   return y + "-" + mm + "-" + dd;
}

function tomorrow() {
   const now = new Date();
   const y = now.getFullYear();
   const m = now.getMonth() + 1;
   const d = now.getDate() + 1;
   const mm = m < 10 ? "0" + m : m;
   const dd = d < 10 ? "0" + d : d;
   return y + "-" + mm + "-" + dd;
}

function TimeForm(props) {
   return (
      <>
         <label>
            Vào
            <input
               type="date"
               value={props.dateIn}
               name="dateCheckIn"
               onChange={props.eventDateIn}
            />
            <input
               type="time"
               value={props.hourIn}
               name="hoursCheckIn"
               onChange={props.eventHourIn}
            />
         </label>
         <label>
            Ra:
            <input
               type="date"
               value={props.dateOut}
               name="dateCheckOut"
               onChange={props.eventDateOut}
            />
            <input
               type="time"
               value={props.hourOut}
               name="hoursCheckOut"
               onChange={props.eventHourOut}
            />
         </label>
      </>
   );
}

export default function FormCheckIn(props) {
   const currentTime = timeNow();
   const currentDate = dateNow();
   const tomorrowDate = tomorrow();
   const userRef = useRef();

   const [customerName, setCustomerName] = useState();
   const [methodCal, setMethodCal] = useState("hours");
   const [dateCheckIn, setDateCheckIn] = useState(currentDate);
   const [dateCheckOut, setDateCheckOut] = useState();
   const [hoursCheckIn, setHoursCheckIn] = useState();
   const [hoursCheckOut, setHoursCheckOut] = useState();

   useEffect(() => {
      userRef.current.focus();
      switch (methodCal) {
         case "hours":
            setHoursCheckIn(currentTime);
            setDateCheckOut(currentDate);
            break;
         case "days":
            setDateCheckOut(tomorrowDate);
            setHoursCheckIn(currentTime);
            setHoursCheckOut("12:00");
            break;
         case "book":
            setDateCheckOut(tomorrowDate);
            setHoursCheckIn("12:00");
            setHoursCheckOut("12:00");
            break;
      }
   }, [methodCal]);

   const handleSubmit = (e) => {
      e.preventDefault();
      var i;
      props.status.map((res) => {
         if (res.room === props.roomNumber) {
            i = res.id;
         }
      });
      fetch(`http://localhost:8000/room-status/${i}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            status: methodCal,
            customer: customerName,
            hoursCheckIn: hoursCheckIn,
         }),
      })
         .then((response) => response.json())
         .then((json) => console.log(json));
      window.location.reload();
   };

   const handleChange = (e) => {
      setCustomerName(e.target.value);
   };

   console.log(props);

   return (
      <Modal
         title="Nhận phòng"
         setOpen={props.setOpen}
         body={
            <>
               <label>
                  Tên khách hàng:
                  <input
                     ref={userRef}
                     type="text"
                     name="customerName"
                     onChange={(e) => setCustomerName(e.target.value)}
                  />
               </label>

               <div className="input radio">
                  <label>
                     Đặt phòng
                     <input
                        id="book"
                        value="book"
                        name="platform"
                        type="radio"
                        onChange={(e) => setMethodCal(e.target.value)}
                     />
                  </label>
                  <label>
                     Tính ngày
                     <input
                        id="days"
                        value="days"
                        name="platform"
                        type="radio"
                        onChange={(e) => setMethodCal(e.target.value)}
                     />
                  </label>
                  <label>
                     Tính giờ
                     <input
                        id="hours"
                        value="hours"
                        name="platform"
                        type="radio"
                        defaultChecked
                        onChange={(e) => setMethodCal(e.target.value)}
                     />
                  </label>
               </div>

               <div className="input date time">
                  {methodCal == "book" ? (
                     <TimeForm
                        dateIn={dateCheckIn}
                        dateOut={dateCheckOut}
                        hourIn={hoursCheckIn}
                        hourOut={hoursCheckOut}
                        eventDateIn={(e) => setDateCheckIn(e.target.value)}
                        eventDateOut={(e) => setDateCheckOut(e.target.value)}
                        eventHourIn={(e) => setHoursCheckIn(e.target.value)}
                        eventHourOut={(e) => setHoursCheckOut(e.target.value)}
                     />
                  ) : methodCal == "days" ? (
                     <TimeForm
                        dateIn={dateCheckIn}
                        dateOut={dateCheckOut}
                        hourIn={hoursCheckIn}
                        hourOut={hoursCheckOut}
                        eventDateIn={(e) => setDateCheckIn(e.target.value)}
                        eventDateOut={(e) => setDateCheckOut(e.target.value)}
                        eventHourIn={(e) => setHoursCheckIn(e.target.value)}
                        eventHourOut={(e) => setHoursCheckOut(e.target.value)}
                     />
                  ) : methodCal == "hours" ? (
                     <TimeForm
                        dateIn={dateCheckIn}
                        dateOut={dateCheckOut}
                        hourIn={hoursCheckIn}
                        eventDateIn={(e) => setDateCheckIn(e.target.value)}
                        eventDateOut={(e) => setDateCheckOut(e.target.value)}
                        eventHourIn={(e) => setHoursCheckIn(e.target.value)}
                        eventHourOut={(e) => setHoursCheckOut(e.target.value)}
                     />
                  ) : (
                     <></>
                  )}
               </div>

               <label>
                  Phòng:
                  <select
                     value={props.roomNumber}
                     onChange={(e) => setCustomerName(e.target.value)}
                  >
                     {props.rooms?.map((data) => (
                        <option key={data.id} value={data.roomName}>
                           {data.roomName}
                        </option>
                     ))}
                  </select>
               </label>
               <label>
                  Trả trước:
                  <input type="text" name="floorName" onChange={handleChange} />
               </label>
               <label>
                  Hình thức:
                  <select
                     value={props.roomNumber}
                     onChange={(e) => setCustomerName(e.target.value)}
                  >
                     <option value="cash">Tiền mặt</option>
                     <option value="tranfer">Chuyển khoản</option>
                  </select>
               </label>
               <label>
                  Ghi chú:
                  <input
                     type="textarea"
                     name="floorName"
                     onChange={handleChange}
                  />
               </label>
            </>
         }
         footer={
            <>
               <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-submit"
               >
                  Thực hiện
               </button>
            </>
         }
      />
   );
}

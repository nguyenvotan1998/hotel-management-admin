import { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
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

function subTime(hourIn, hourOut) {
   const arrayIn = hourIn.split(":");
   const arrayOut = hourOut.split(":");
   let totalHour, totalMinute;
   if (arrayOut[1] >= arrayIn[1]) {
      totalHour = arrayOut[0] - arrayIn[0];
      totalMinute = arrayOut[1] - arrayIn[1];
   } else {
      totalHour = arrayOut[0] - arrayIn[0] - 1;
      totalMinute = Number(60 - arrayIn[1]) + Number(arrayOut[1]);
   }
   if (totalHour < 10) {
      totalHour = String("0") + totalHour;
   }
   return totalHour + ":" + totalMinute;
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

export default function Hours(props) {
   const currentTime = timeNow();
   //    const currentDate = dateNow();
   //    const tomorrowDate = tomorrow();
   //   const userRef = useRef();

   //    const [customerName, setCustomerName] = useState();
   //    const [methodCal, setMethodCal] = useState("hours");
   //    const [dateCheckIn, setDateCheckIn] = useState(currentDate);
   //    const [dateCheckOut, setDateCheckOut] = useState();
   //    const [hoursCheckIn, setHoursCheckIn] = useState();
   //    const [hoursCheckOut, setHoursCheckOut] = useState();

   //    useEffect(() => {
   //       userRef.current.focus();
   //       switch (methodCal) {
   //          case "hours":
   //             setHoursCheckIn(currentTime);
   //             setDateCheckOut(currentDate);
   //             break;
   //          case "days":
   //             setDateCheckOut(tomorrowDate);
   //             setHoursCheckIn(currentTime);
   //             setHoursCheckOut("12:00");
   //             break;
   //          case "book":
   //             setDateCheckOut(tomorrowDate);
   //             setHoursCheckIn("12:00");
   //             setHoursCheckOut("12:00");
   //             break;
   //       }
   //    }, [methodCal]);

   //    // function statusOfRoom() {}

   //    const handleSubmit = (e) => {
   //       e.preventDefault();
   //       var i;
   //       props.status.map((res) => {
   //          if (res.room === props.roomNumber) {
   //             i = res.id;
   //          }
   //       });
   //       fetch(`http://localhost:8000/room-status/${i}`, {
   //          method: "PATCH",
   //          headers: { "Content-Type": "application/json" },
   //          body: JSON.stringify({
   //             status: methodCal,
   //             customer: customerName,
   //             hoursCheckIn: hoursCheckIn,
   //          }),
   //       })
   //          .then((response) => response.json())
   //          .then((json) => console.log(json));
   //       window.location.reload();
   //    };

   //    const handleChange = (e) => {
   //       setCustomerName(e.target.value);
   //    };

   const totalTime = subTime(props.hourIn, currentTime);

   console.log(props);
   console.log(totalTime);
   console.log(currentTime);

   const handleSave = () => {};
   const handleCheckOut = () => {};

   return (
      <Modal
         title={"Thanh toán " + props.roomNumber}
         setOpen={props.setOpen}
         body={
            <>
               <div>
                  <p>Tên khách hàng:</p>
                  <p>{props.customerName}</p>
               </div>
               <div>
                  <p>Giờ vào:</p>
                  <p>{props.hourIn}</p>
               </div>
               <div>
                  <p>Giờ ra:</p>
                  <p>{currentTime}</p>
               </div>
               <div>
                  <p>Tổng giờ:</p>
                  <p>{totalTime}</p>
               </div>
            </>
         }
         footer={
            <>
               <button onClick={() => handleSave()} className="btn btn-submit">
                  Lưu
               </button>
               <button
                  onClick={() => handleCheckOut()}
                  className="btn btn-submit"
               >
                  Thanh toán
               </button>
            </>
         }
      />
   );
}

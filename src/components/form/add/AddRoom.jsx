import React from "react";
import { useState, useEffect, useRef } from "react";
import Modal from "../../modal/Modal";

export default function AddRoom(props) {
   useEffect(() => {
      Promise.all([
         fetch("http://localhost:8000/floors").then((value) => value.json()),
         fetch("http://localhost:8000/room-types").then((value) =>
            value.json()
         ),
      ])
         .then(([floors, roomTypes]) => {
            setList(floors);
            setList2(roomTypes);
         })
         .catch((err) => {
            console.log(err);
         });
      floorRef.current.focus();
   }, []);

   const [list, setList] = useState();
   const [list2, setList2] = useState();
   const [floor, setFloor] = useState("Lầu 1");
   const [roomType, setRoomType] = useState("Nhỏ");
   const [roomName, setRoomName] = useState(null);
   const [bedNumber, setBedNumber] = useState(1);
   const [peopleNumber, setPeopleNumber] = useState(2);
   const floorRef = useRef();
   const roomTypeRef = useRef();

   const handleSubmit = (event) => {
      event.preventDefault();
      // Promise.all([
      //    fetch("http://localhost:8000/floors").then((value) => value.json()),
      //    fetch("http://localhost:8000/rooms").then((value) => value.json()),
      // ])
      //    .then(([floors, rooms]) => {
      //       setFloors(floors);
      //       setRooms(rooms);
      //    })
      //    .catch((err) => {
      //       console.log(err);
      //    });
      fetch("http://localhost:8000/rooms", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            roomName: roomName,
            floor: floor,
            roomType: roomType,
            bedNumber: bedNumber,
            peopleNumber: peopleNumber,
         }),
      });
      fetch("http://localhost:8000/room-status", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            room: roomName,
            status: "empty",
         }),
      });
      window.location.reload();
   };

   return (
      <>
         <Modal
            title="Thêm phòng"
            setOpen={props.setOpen}
            body={
               <>
                  <label>
                     Lầu:
                     <select
                        ref={floorRef}
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                     >
                        {list?.map((data) => (
                           <React.Fragment key={data.id}>
                              <option value={data.name}>{data.name}</option>
                           </React.Fragment>
                        ))}
                     </select>
                  </label>
                  <label>
                     Loại phòng:
                     <select
                        ref={roomTypeRef}
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                     >
                        {list2?.map((data) => (
                           <React.Fragment key={data.id}>
                              <option value={data.name}>{data.name}</option>
                           </React.Fragment>
                        ))}
                     </select>
                  </label>
                  <label>
                     Tên phòng:
                     <input
                        type="text"
                        name="roomName"
                        onChange={(e) => setRoomName(e.target.value)}
                     />
                  </label>
                  <label>
                     Số giường:
                     <input
                        type="text"
                        name="bedNumber"
                        value={bedNumber}
                        onChange={(e) => setBedNumber(e.target.value)}
                     />
                  </label>
                  <label>
                     Số người:
                     <input
                        type="text"
                        name="peopleNumber"
                        value={peopleNumber}
                        onChange={(e) => setPeopleNumber(e.target.value)}
                     />
                  </label>
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
      </>
   );
}

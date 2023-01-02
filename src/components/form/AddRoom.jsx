import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Modal from "../modal/Modal";

export default function AddRoom(props) {
   const [floorData] = useFetch("http://localhost:8000/floors");
   const [roomTypeData] = useFetch("http://localhost:8000/room-types");

   const [floor, setFloor] = useState();
   const [roomType, setRoomType] = useState();
   const [roomName, setRoomName] = useState();
   const [bedNumber, setBedNumber] = useState();
   const [peopleNumber, setPeopleNumber] = useState();

   const handleFloor = (e) => {
      console.log(e);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
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
      window.location.reload();
   };
   const handleChange = (event) => {
      //   setFloorName(event.target.value);
   };

   console.log(floor);
   console.log(roomType);

   return (
      <>
         <Modal
            title="Thêm phòng"
            setOpen={props.setOpen}
            body={
               <>
                  <label>
                     Lầu:
                     <select onChange={(e) => setFloor(e.target.value)}>
                        {floorData &&
                           floorData.map((data) => (
                              <option key={data.id} value={data.name}>
                                 {data.name}
                              </option>
                           ))}
                     </select>
                  </label>
                  <label>
                     Loại phòng:
                     <select onChange={(e) => setRoomType(e.target.value)}>
                        {roomTypeData &&
                           roomTypeData.map((data) => (
                              <option key={data.id} value={data.name}>
                                 {data.name}
                              </option>
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
                        onChange={(e) => setBedNumber(e.target.value)}
                     />
                  </label>
                  <label>
                     Số người:
                     <input
                        type="text"
                        name="peopleNumber"
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

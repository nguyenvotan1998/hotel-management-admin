import { useState } from "react";
import Modal from "../../modal/Modal";

export default function AddRoomType(props) {
   const [roomTypeName, setRoomTypeName] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:8000/room-types", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: roomTypeName,
         }),
      });
      window.location.reload();
   };

   const handleChange = (e) => {
      setRoomTypeName(e.target.value);
   };

   return (
      <>
         <Modal
            title="Thêm thêm loại phòng"
            setOpen={props.setOpenForm}
            body={
               <>
                  <label>
                     Tên loại phòng:
                     <input
                        type="text"
                        name="roomTypeName"
                        onChange={handleChange}
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

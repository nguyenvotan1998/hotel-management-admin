import { useState } from "react";
import Modal from "../modal/Modal";

export default function AddFloor(props) {
   const [floorName, setFloorName] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:8000/floors", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: floorName,
         }),
      });
      window.location.reload();
   };

   const handleChange = (e) => {
      setFloorName(e.target.value);
   };

   return (
      <>
         <Modal
            title="Thêm khách hàng"
            setOpen={props.setOpenForm}
            body={
               <>
                  <label>
                     Tên lầu:
                     <input
                        type="text"
                        name="floorName"
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

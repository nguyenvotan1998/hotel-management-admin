import { useState, useRef, useEffect } from "react";
import Modal from "../../modal/Modal";

export default function AddFloor(props) {
   const [floorName, setFloorName] = useState();
   const floor = useRef();

   useEffect(() => {
      floor.current.focus();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:8000/floors", {
         method: "post",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: floorName,
         }),
      });
      window.location.reload(false);
   };

   return (
      <>
         <Modal
            title="Thêm lầu"
            setOpen={props.setOpen}
            body={
               <>
                  <label>
                     Tên lầu:
                     <input
                        type="text"
                        ref={floor}
                        name="floorName"
                        onChange={(e) => setFloorName(e.target.value)}
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

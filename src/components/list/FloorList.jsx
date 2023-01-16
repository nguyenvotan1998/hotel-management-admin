import "./list.scss";
import { useState, useRef, useEffect, memo } from "react";
import useFetch from "../hooks/useFetch";
import Modal from "../modal/Modal";
import AddFloor from "../form/add/AddFloor";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

function EditFloor(props) {
   const [floorName, setFloorName] = useState(props.name);

   useEffect(() => {
      props.floorRef.current.focus();
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
            title="Sửa lầu"
            setOpen={props.setOpen}
            body={
               <>
                  <label>
                     Id lầu:
                     <input type="text" value={props.id} readOnly />
                  </label>
                  <label>
                     Tên lầu:
                     <input
                        type="text"
                        ref={props.floorRef}
                        name="name"
                        value={floorName}
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
function FloorList(props) {
   const { data, loading, error } = useFetch("http://localhost:8000/floors");
   const [openAdd, setOpenAdd] = useState(false);
   const [openEdit, setOpenEdit] = useState(false);
   const [valueForEdit, setValueForEdit] = useState({
      id: "",
      name: "",
   });
   const floorRef = useRef();

   const getValue = (e) => {
      const parent = e.target.parentNode;
      const name = parent.previousElementSibling;
      const id = name.previousElementSibling;
      const floorName = name.innerHTML;
      const floorId = id.innerHTML;
      setValueForEdit((prev) => ({ ...prev, id: floorId, name: floorName }));
      setOpenEdit(true);
   };

   const render = (array) =>
      array?.map((res) => (
         <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.name}</td>
            <td>
               <BsPencil className="icon icon__edit" onClick={getValue} />
            </td>
            <td>
               <BsTrash
                  className="icon icon__delete"
                  onClick={() => deleteFloor(res.id)}
               />
            </td>
         </tr>
      ));

   function deleteFloor(id) {
      fetch(`http://localhost:8000/floors/${id}`, {
         method: "delete",
      });
      window.location.reload(false);
   }

   return (
      <div className="list">
         <div className="list__header">
            <h3 className="title list__title">Thông tin lầu</h3>
            <button className="btn btn-add" onClick={() => setOpenAdd(true)}>
               Thêm lầu
            </button>
            {openAdd && <AddFloor setOpen={setOpenAdd} />}
            {openEdit && (
               <EditFloor
                  setOpen={setOpenEdit}
                  floorRef={floorRef}
                  id={valueForEdit.id}
                  name={valueForEdit.name}
               />
            )}
         </div>
         <table>
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {loading && (
                  <tr>
                     <td>Loading ... </td>
                     <td>Loading ... </td>
                     <td>
                        <BsPencil className="icon icon__edit" />
                     </td>
                     <td>
                        <BsTrash className="icon icon__delete" />
                     </td>
                  </tr>
               )}
               {render(data)}
            </tbody>
         </table>
      </div>
   );
}

export default memo(FloorList);

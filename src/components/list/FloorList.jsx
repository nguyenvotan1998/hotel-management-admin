import "./list.scss";
import { useState, useRef, useEffect, memo } from "react";
import useFetch from "../hooks/useFetch";
import Modal from "../modal/Modal";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function AddFloor(props) {
   const [floorName, setFloorName] = useState();

   useEffect(() => {
      props.nameRef.current.focus();
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
      props.onLoad();
      props.setOpen(false);
   };

   return (
      <>
         <Modal
            title="Thêm lầu"
            setOpen={props.setOpen}
            body={
               <div className="form">
                  <label className="input">
                     Tên lầu:
                     <input
                        type="text"
                        ref={props.nameRef}
                        name="floorName"
                        onChange={(e) => setFloorName(e.target.value)}
                     />
                  </label>
               </div>
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

function EditFloor(props) {
   const [floorName, setFloorName] = useState(props.name);

   useEffect(() => {
      props.nameRef.current.focus();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:8000/floors/${props.id}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: floorName,
         }),
      });
      props.onLoad();
      props.setOpen(false);
   };

   return (
      <>
         <Modal
            title="Sửa lầu"
            setOpen={props.setOpen}
            body={
               <div className="form">
                  <label className="input">
                     Id lầu:
                     <input type="text" value={props.id} readOnly />
                  </label>
                  <label className="input">
                     Tên lầu:
                     <input
                        type="text"
                        ref={props.nameRef}
                        name="name"
                        value={floorName}
                        onChange={(e) => setFloorName(e.target.value)}
                     />
                  </label>
               </div>
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
   const [load, setLoad] = useState(false);
   const { data, loading, error } = useFetch(
      "http://localhost:8000/floors",
      load
   );
   const [open, setOpen] = useState({
      add: false,
      edit: false,
      alert: false,
   });

   const [floorEdit, setFloorEdit] = useState({
      id: "",
      name: "",
   });

   const nameRef = useRef();

   const render = (array) =>
      array?.map((res) => (
         <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.name}</td>
            <td>
               <BsPencil
                  className="icon icon__edit"
                  onClick={() => handleEdit(res.id)}
               />
            </td>
            <td>
               <BsTrash
                  className="icon icon__delete"
                  onClick={() => handleDelete(res.id)}
               />
            </td>
         </tr>
      ));
   const handleEdit = (id) => {
      const floorChoose = data?.find((current) =>
         current.id === id ? current : null
      );
      setFloorEdit(floorChoose);
      setOpen((prev) => ({ ...prev, edit: true }));
   };
   const handleDelete = (id) => {
      fetch(`http://localhost:8000/floors/${id}`, {
         method: "delete",
      });
      handleReLoad();
   };

   const handleReLoad = () => {
      setLoad(!load);
   };

   const handleClose = () => {
      setOpen((prev) => ({ ...prev, alert: false }));
   };

   if (error) {
      console.log(error);
      return null;
   }
   return (
      <div className="list">
         <Snackbar
            open={open.alert}
            autoHideDuration={6000}
            onClose={handleClose}
         >
            <Alert
               onClose={handleClose}
               severity="error"
               sx={{ width: "100%" }}
            >
               Lỗi load dữ liệu!!!
            </Alert>
         </Snackbar>
         <div className="list__header">
            <h3 className="title list__title">Thông tin lầu</h3>
            <button
               className="btn btn-add"
               onClick={() => setOpen((prev) => ({ ...prev, add: true }))}
            >
               Thêm lầu
            </button>
            {open.add && (
               <AddFloor
                  setOpen={setOpen}
                  nameRef={nameRef}
                  onLoad={handleReLoad}
               />
            )}
            {open.edit && (
               <EditFloor
                  setOpen={setOpen}
                  nameRef={nameRef}
                  onLoad={handleReLoad}
                  id={floorEdit.id}
                  name={floorEdit.name}
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

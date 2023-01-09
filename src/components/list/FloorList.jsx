import "./list.scss";
import { useEffect, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import Modal from "../modal/Modal";
import AddFloor from "../form/AddFloor";
import Container from "../container/Container";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { ModalContext } from "../../App";
import { Add } from "@mui/icons-material";

export default function FloorList(props) {
   const { data, loading, error } = useFetch("http://localhost:8000/floors");

   const [openForm, setOpenForm] = useState(false);

   const renderData = data?.map((data) => (
      <tr key={data.id}>
         <td>{data.id}</td>
         <td>{data.name}</td>
         <td>
            <BsPencil className="icon icon__edit" />
         </td>
         <td>
            <BsTrash
               className="icon icon__delete"
               onClick={() => deleteFloor(data.id)}
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
            <button className="btn btn-add" onClick={() => setOpenForm(true)}>
               Thêm lầu
            </button>
            {openForm && <AddFloor setOpenForm={setOpenForm} />}
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
                  </tr>
               )}
               {data && renderData}
            </tbody>
         </table>
      </div>
   );
}

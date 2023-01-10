import "./list.scss";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import AddRoomType from "../form/add/AddRoomType";

export default function RoomTypeList() {
   const { data, loading, error } = useFetch(
      "http://localhost:8000/room-types"
   );
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
               onClick={() => deleteRoomType(data.id)}
            />
         </td>
      </tr>
   ));

   function deleteRoomType(id) {
      fetch(`http://localhost:8000/room-types/${id}`, {
         method: "delete",
      });
      window.location.reload();
   }

   return (
      <div className="list">
         <div className="list__header">
            <h3 className="title list__title">Phân loại phòng</h3>
            <button className="btn btn-add" onClick={() => setOpenForm(true)}>
               Thêm loại phòng
            </button>
            {openForm && <AddRoomType setOpenForm={setOpenForm} />}
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

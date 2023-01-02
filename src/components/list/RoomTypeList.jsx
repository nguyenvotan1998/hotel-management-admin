import "./list.scss";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import AddFloor from "../form/AddFloor";
import AddRoomType from "../form/AddRoomType";

export default function RoomTypeList() {
   const [roomType] = useFetch("http://localhost:8000/room-types");
   const [openForm, setOpenForm] = useState(false);

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
               {roomType &&
                  roomType.map((roomType) => (
                     <tr key={roomType.id}>
                        <td>{roomType.id}</td>
                        <td>{roomType.name}</td>
                        <td>
                           <BsPencil
                              className="icon icon__edit"
                              // onClick={() => setOpen(true)}
                           />
                        </td>
                        <td>
                           <BsTrash
                              className="icon icon__delete"
                              onClick={() => deleteRoomType(roomType.id)}
                           />
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}

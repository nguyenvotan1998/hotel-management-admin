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
// import useFetch from "../hooks/useFetch";

export default function RoomList() {
   const [room] = useFetch("http://localhost:8000/rooms");

   function addRoom() {}
   function deleteRoom(id) {
      fetch(`http://localhost:8000/rooms/${id}`, {
         method: "delete",
      });
      window.location.reload();
   }
   return (
      <div className="list">
         <table>
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Floor</th>
                  <th>Room Type</th>
                  <th>Bed Number</th>
                  <th>People Number</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {room &&
                  room.map((room) => (
                     <tr key={room.id}>
                        <td>{room.id}</td>
                        <td>{room.roomName}</td>
                        <td>{room.floor}</td>
                        <td>{room.roomType}</td>
                        <td>{room.bedNumber}</td>
                        <td>{room.peopleNumber}</td>
                        <td>
                           <BsPencil className="icon icon__edit" />
                        </td>
                        <td>
                           <BsTrash
                              className="icon icon__delete"
                              onClick={() => deleteRoom(room.id)}
                           />
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}

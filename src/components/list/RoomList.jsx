import "./list.scss";
import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

export default function RoomList() {
   const { data, loading, error } = useFetch("http://localhost:8000/rooms");

   const renderData = data?.map((data) => (
      <tr key={data.id}>
         <td>{data.id}</td>
         <td>{data.roomName}</td>
         <td>{data.floor}</td>
         <td>{data.roomType}</td>
         <td>{data.bedNumber}</td>
         <td>{data.peopleNumber}</td>
         <td>
            <BsPencil className="icon icon__edit" />
         </td>
         <td>
            <BsTrash
               className="icon icon__delete"
               onClick={() => deleteRoom(data.id)}
            />
         </td>
      </tr>
   ));

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

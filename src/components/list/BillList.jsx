import "./list.scss";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import AddFloor from "../form/add/AddFloor";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
export default function BillList(props) {
   const { data, loading, error } = useFetch("http://localhost:8000/floors");

   const [openForm, setOpenForm] = useState(false);

   const render = (array) =>
      array?.map((res) => (
         <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.name}</td>
            <td>
               <BsPencil className="icon icon__edit" />
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

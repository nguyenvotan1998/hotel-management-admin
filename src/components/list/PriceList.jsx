import "./list.scss";
import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
export default function PriceList() {
   const { data, loading, error } = useFetch(
      "http://localhost:8000/room-prices"
   );

   const deletePrice = (id) => {
      fetch(`http://localhost:8000/room-prices/${id}`, {
         method: "delete",
      });
      window.location.reload();
   };

   const render = (array) =>
      array?.map((res) => (
         <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.roomType}</td>
            <td>{res.method}</td>
            <td>{res.price}</td>
            <td>{res.early}</td>
            <td>{res.late}</td>
            <td>
               <BsPencil className="icon icon__edit" />
            </td>
            <td>
               <BsTrash
                  className="icon icon__delete"
                  onClick={() => deletePrice(res.id)}
               />
            </td>
         </tr>
      ));

   return (
      <div className="list">
         <table>
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Room Type</th>
                  <th>Method</th>
                  <th>Price</th>
                  <th>Early</th>
                  <th>Late</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {loading && (
                  <tr>
                     <td>Loading ... </td>
                     <td>Loading ... </td>
                     <td>Loading ... </td>
                     <td>Loading ... </td>
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

import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

export default function CustomerList() {
   const { data, loading, error } = useFetch("http://localhost:8000/customers");

   const render = (array) =>
      array?.map((res) => (
         <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.name}</td>
            <td>{res.sex}</td>
            <td>{res.card}</td>
            <td>{res.phone}</td>
            <td>{res.address}</td>
            <td>{res.birthday}</td>
            <td>
               <BsPencil className="icon icon__edit" />
            </td>
            <td>
               <BsTrash
                  className="icon icon__delete"
                  onClick={() => deleteCustomer(res.id)}
               />
            </td>
         </tr>
      ));

   function deleteCustomer(id) {
      fetch(`http://localhost:8000/customers/${id}`, {
         method: "delete",
      });
      window.location.reload();
   }

   if (error) {
      alert("ERROR!!!");
   }

   return (
      <table className="customer-list">
         <thead>
            <tr>
               <th>Id</th>
               <th>Full Name</th>
               <th>Sex</th>
               <th>Id card</th>
               <th>Phone number</th>
               <th>Address</th>
               <th>Birthday</th>
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
   );
}

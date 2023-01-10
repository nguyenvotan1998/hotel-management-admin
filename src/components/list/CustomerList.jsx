import { useEffect, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

export default function CustomerList() {
   const { data, loading, error } = useFetch("http://localhost:8000/customers");

   function deleteCustomer(id) {
      fetch(`http://localhost:8000/customers/${id}`, {
         method: "delete",
      });
      window.location.reload();
   }

   return (
      <table className="customer-list">
         <thead>
            <tr>
               <th>Order</th>
               <th>Id</th>
               <th>Full Name</th>
               <th>Birthday</th>
               <th>Phone number</th>
               <th>Id card</th>
               <th>Company</th>
               <th>Address</th>
               <th>City</th>
               <th>Member type</th>
               <th>Edit</th>
               <th>Delete</th>
            </tr>
         </thead>
         <tbody>
            {data &&
               data.map((customer) => (
                  <tr key={customer.id}>
                     <th>1</th>
                     <th>{customer.id}</th>
                     <th>{customer.fullName}</th>
                     <th>{customer.birthDay}</th>
                     <th>{customer.phoneNumber}</th>
                     <th>{customer.idCard}</th>
                     <th>{customer.company}</th>
                     <th>{customer.address}</th>
                     <th>{customer.city}</th>
                     <th>{customer.memberType}</th>
                     <th>
                        <BsPencil
                           className="icon icon__edit"
                           // onClick={() => setOpen(true)}
                        />
                     </th>
                     <th>
                        <BsTrash
                           className="icon icon__delete"
                           onClick={() => deleteCustomer(customer.id)}
                        />
                     </th>
                  </tr>
               ))}
         </tbody>
      </table>
   );
}

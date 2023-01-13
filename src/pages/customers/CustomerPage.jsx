import "./customer-page.scss";
import { useState } from "react";
import Container from "../../components/container/Container";
import CustomerList from "../../components/list/CustomerList";
import Modal from "../../components/modal/Modal";
import AddCustomer from "../../components/form/add/AddCustomer";

export default function CustomerPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className="page">
         <Container
            title="Danh sách khách hàng"
            isButton={true}
            button={
               <>
                  <button
                     style={{ marginBottom: "10px" }}
                     className="btn btn-add"
                     onClick={() => setOpen(true)}
                  >
                     Thêm
                  </button>
                  {open && (
                     <Modal title="Thêm khách hàng" body={<AddCustomer />} />
                  )}
               </>
            }
            body={
               <>
                  <CustomerList />
               </>
            }
         />
      </div>
   );
}

import { useState } from "react";
// import "./room-page.scss";
import Container from "../../components/container/Container";
import AddRoom from "../../components/form/add/AddRoom";
import FloorList from "../../components/list/FloorList";
import RoomTypeList from "../../components/list/RoomTypeList";
import RoomList from "../../components/list/RoomList";
import BillList from "../../components/list/BillList";

function Header(props) {
   return (
      <>
         <input type="text" placeholder="Room" />
         <input type="text" placeholder="Customer" />
         <button className="btn" onClick={() => props.setOpen(true)}>
            Tìm
         </button>
         {props.open && <AddRoom setOpen={props.setOpen} />}
      </>
   );
}

export default function BillPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className="page">
         <Container
            title="Danh sách hóa đơn"
            isButton={true}
            button={<Header open={open} setOpen={setOpen} />}
            body={
               <>
                  <BillList />
               </>
            }
         />
      </div>
   );
}

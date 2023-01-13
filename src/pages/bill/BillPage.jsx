import { useState } from "react";
// import "./room-page.scss";
import Container from "../../components/container/Container";
import AddRoom from "../../components/form/add/AddRoom";
import FloorList from "../../components/list/FloorList";
import RoomTypeList from "../../components/list/RoomTypeList";
import RoomList from "../../components/list/RoomList";
import BillList from "../../components/list/BillList";

export default function BillPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className="page">
         <Container
            title="Danh sách hóa đơn"
            button={
               <>
                  <button className="btn" onClick={() => setOpen(true)}>
                     Thêm phòng
                  </button>
                  {open && <AddRoom setOpen={setOpen} />}
               </>
            }
            body={
               <>
                  <BillList />
               </>
            }
         />
      </div>
   );
}

import { useState } from "react";
import "./room-page.scss";
import Container from "../../components/container/Container";
import AddRoom from "../../components/form/add/AddRoom";
import FloorList from "../../components/list/FloorList";
import RoomTypeList from "../../components/list/RoomTypeList";
import RoomList from "../../components/list/RoomList";

export default function RoomPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className="page">
         <Container
            title="Phân loại phòng"
            body={
               <>
                  <FloorList />
                  <RoomTypeList />
               </>
            }
         />
         <Container
            title="Danh sách phòng"
            isButton={true}
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
                  <RoomList />
               </>
            }
         />
      </div>
   );
}

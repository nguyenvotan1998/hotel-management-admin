import { useEffect, useState, useContext } from "react";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import "./room-page.scss";
import useFetch from "../../components/hooks/useFetch";
import Modal from "../../components/modal/Modal";
import AddFloor from "../../components/form/AddFloor";
import AddRoom from "../../components/form/AddRoom";
import Container from "../../components/container/Container";
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

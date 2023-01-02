import "./home.scss";
import { useEffect, useState } from "react";
import useFetch from "../../components/hooks/useFetch";
import Modal from "../../components/modal/Modal";
import AddFloor from "../../components/form/AddFloor";
import Container from "../../components/container/Container";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import FloorList from "../../components/list/FloorList";
import RoomStatusList from "../../components/room-status/RoomStatusList";
export default function Home() {
   return (
      <div className="page">
         <Container title="Danh sách phòng" body={<RoomStatusList />} />
      </div>
   );
}

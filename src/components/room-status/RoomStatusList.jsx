import "./room-status-list.scss";
import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import RoomStatus from "../room-status/RoomStatus";
import { GiBroom } from "react-icons/gi";

function formatDate(value) {
   const array = value.split("-");
   return array[2] + "/" + array[1];
}

export default function RoomStatusList() {
   const [floors, setFloors] = useState();
   const [rooms, setRooms] = useState();
   const [status, setStatus] = useState();

   useEffect(() => {
      Promise.all([
         fetch("http://localhost:8000/floors").then((value) => value.json()),
         fetch("http://localhost:8000/rooms").then((value) => value.json()),
         fetch("http://localhost:8000/room-status").then((value) =>
            value.json()
         ),
      ])
         .then(([floors, rooms, status]) => {
            setFloors(floors);
            setRooms(rooms);
            setStatus(status);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="wrapper">
         {floors?.map((f) => (
            <div key={f.id} className="floor">
               <h2>{f.name}</h2>
               <div className="room-status-container">
                  {rooms?.map((r) =>
                     f.name === r.floor
                        ? status?.map((s) =>
                             r.roomName === s.room && s.status === "empty" ? (
                                <RoomStatus key={r.id} bg="white" status={s} />
                             ) : r.roomName === s.room &&
                               s.status === "notclean" ? (
                                <RoomStatus
                                   key={r.id}
                                   iconStatus={<GiBroom />}
                                   status={s}
                                />
                             ) : r.roomName === s.room &&
                               s.status === "using" &&
                               s.method === "hours" ? (
                                <RoomStatus key={r.id} bg="red" status={s} />
                             ) : r.roomName === s.room &&
                               s.status === "using" &&
                               s.method === "days" ? (
                                <RoomStatus key={r.id} bg="orange" status={s} />
                             ) : r.roomName === s.room &&
                               s.status === "using" &&
                               s.method === "book" ? (
                                <RoomStatus
                                   key={r.id}
                                   bg="orange"
                                   rooms={rooms}
                                   status={s.status}
                                   roomNumber={r.roomName}
                                   startDay={s.hoursCheckIn}
                                   // endDay={time}
                                   customerName={s.customer}
                                />
                             ) : null
                          )
                        : null
                  )}
               </div>
            </div>
         ))}
      </div>
   );
}

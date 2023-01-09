import "./room-status-list.scss";
import { useState, useEffect, useRef } from "react";

import useFetch from "../hooks/useFetch";
import RoomStatus from "../room-status/RoomStatus";
import { Fragment } from "react";

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
               <div key={f.id} className="room-status-container">
                  {rooms?.map(
                     (r) =>
                        f.name === r.floor ? (
                           status?.map((s) =>
                              r.roomName === s.room && s.status === "empty" ? (
                                 <RoomStatus
                                    key={r.id}
                                    bg="white"
                                    roomNumber={r.roomName}
                                    rooms={rooms}
                                    status={s.status}
                                 />
                              ) : r.roomName === s.room &&
                                s.status === "hours" ? (
                                 <RoomStatus
                                    key={r.id}
                                    bg="red"
                                    rooms={rooms}
                                    status={s.status}
                                    roomNumber={r.roomName}
                                    startDay={s.hoursCheckIn}
                                    customerName={s.customer}
                                 />
                              ) : (
                                 <Fragment key={s.room}></Fragment>
                              )
                           )
                        ) : (
                           <Fragment key={r.id}></Fragment>
                        )
                     // f.name === r.floor ? (
                     //    <RoomStatus
                     //       key={r.id}
                     //       roomNumber={r.roomName}
                     //       rooms={rooms}
                     //       status={status}

                     //    />
                     // ) : (
                     //    <Fragment key={r.id}></Fragment>
                     // )
                  )}
               </div>
            </div>
         ))}
      </div>
   );
}

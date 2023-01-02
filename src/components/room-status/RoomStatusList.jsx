import "./room-status-list.scss";
import useFetch from "../hooks/useFetch";
import RoomStatus from "../room-status/RoomStatus";

const roomNumber = [
   {
      id: 1,
      room: "01",
   },
   {
      id: 2,
      room: "02",
   },
   {
      id: 3,
      room: "03",
   },
];

export default function RoomStatusList() {
   const [floor] = useFetch("http://localhost:8000/floors");
   const [room] = useFetch("http://localhost:8000/rooms");
   return (
      <div className="wrapper">
         {floor &&
            floor.map((floor) => (
               <div key={floor.id} className="floor">
                  <h2>{floor.name}</h2>
                  <div className="room-status-container">
                     {room &&
                        room.map(
                           (room) => {
                              if (floor.name.localeCompare(room.floor) == 0)
                                 return (
                                    <RoomStatus
                                       key={room.id}
                                       roomNumber={room.roomName}
                                    />
                                 );
                           }

                           // <RoomStatus
                           //    key={room.id}
                           //    roomNumber={room.roomName}
                           // />
                        )}
                  </div>
               </div>
            ))}
      </div>
   );
}

import "./room-setting-list.scss";
import RoomSetting from "./RoomSetting";

export default function RoomSettingList(props) {
   const infoRoom = () => {
      alert(props.roomNumber);
   };
   return (
      <div className="room-setting-list">
         <RoomSetting title="Thông tin phòng" onClick={infoRoom} />
         <RoomSetting title="Danh sách đặt phòng" />
         <RoomSetting title="Đặt phòng" />
         <RoomSetting title="Chi tiết giá phòng" />
      </div>
   );
}

import { useEffect, useState, useContext } from "react";
import Container from "../../../components/container/Container";
import PriceList from "../../../components/list/PriceList";
import RoomList from "../../../components/list/RoomList";
import AddPrice from "../../../components/form/add/AddPrice";

export default function RoomPrices() {
   const [open, setOpen] = useState(false);

   return (
      <div className="page">
         <Container
            title="Giá phòng"
            isButton={true}
            button={
               <>
                  <button className="btn" onClick={() => setOpen(true)}>
                     Thêm phòng
                  </button>
                  {open && <AddPrice setOpen={setOpen} />}
               </>
            }
            body={
               <>
                  <PriceList />
               </>
            }
         />
      </div>
   );
}

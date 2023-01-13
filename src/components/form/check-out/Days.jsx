import "./check-out.scss";
import Modal from "../../modal/Modal";

function timeNow() {
   const now = new Date();
   const h = now.getHours();
   const m = now.getMinutes();
   const hh = h < 10 ? "0" + h : h;
   const mm = m < 10 ? "0" + m : m;
   return hh + ":" + mm;
}

function dateNow() {
   const now = new Date();
   const y = now.getFullYear();
   const m = now.getMonth() + 1;
   const d = now.getDate();
   const mm = m < 10 ? "0" + m : m;
   const dd = d < 10 ? "0" + d : d;
   return y + "-" + mm + "-" + dd;
}

function formatDate(value) {
   const array = value.split("-");
   return array[2] + "/" + array[1];
}

export default function Days(props) {
   const handleSave = () => {};
   const handleCheckOut = () => {};

   console.log(props);
   return (
      <Modal
         title={"Thanh toán " + props.roomNumber}
         setOpen={props.setOpen}
         body={
            <>
               <div>
                  <p>Tên khách hàng:</p>
                  <p>{props.customerName}</p>
               </div>
               <div>
                  <p>Giờ vào:</p>
                  <div className="display time-date">
                     <p>{props.hourIn}</p>
                     <p>{props.dateIn}</p>
                  </div>
               </div>
               <div>
                  <p>Giờ ra:</p>
                  <div className="display time-date">
                     <p>{timeNow()}</p>
                     <p>{formatDate(dateNow())}</p>
                  </div>
               </div>
               <div>
                  <p>Tổng thời gian:</p>
                  <div className="display time-date">
                     <p>{timeNow()}</p>
                     <p>{formatDate(dateNow())}</p>
                  </div>
               </div>
               <div>
                  <p>Tổng tiền phòng:</p>
                  <div className="display time-date">
                     <p>{timeNow()}</p>
                     <p>{formatDate(dateNow())}</p>
                  </div>
               </div>
               <div>
                  <p>Trả trước:</p>
                  <div className="display time-date">
                     <p>{props.prepay}</p>
                     <p>{formatDate(dateNow())}</p>
                  </div>
               </div>
            </>
         }
         footer={
            <>
               <button onClick={() => handleSave()} className="btn btn-submit">
                  Lưu
               </button>
               <button
                  onClick={() => handleCheckOut()}
                  className="btn btn-submit"
               >
                  Thanh toán
               </button>
            </>
         }
      />
   );
}

import "./check-out.scss";
import { useEffect, useState, useRef, createElement, useReducer } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import Modal from "../../modal/Modal";
import {
   timeNow,
   dateNow,
   roundTime,
   formatDate,
   subTime,
   subDate,
} from "../../../script";

export default function CheckOut(props) {
   const [room, setRoom] = useState();
   const [price, setPrice] = useState();
   const [servicedata, setServiceData] = useState();
   const [bill, setBill] = useState({
      room: "",
      customer: "",
      method: "",
      dateIn: "",
      dateOut: "",
      hourIn: "",
      hourOut: "",
      dateTotal: "",
      hourTotal: "",
      roomPrice: "",
      service: [],
      servicePrice: "",
      prepay: "",
      priceTotal: "",
      payment: "",
      dateBill: "",
   });

   useEffect(() => {
      Promise.all([
         fetch("http://localhost:8000/rooms").then((value) => value.json()),
         fetch("http://localhost:8000/room-prices").then((value) =>
            value.json()
         ),
         fetch("http://localhost:8000/services").then((value) => value.json()),
      ])
         .then(([r, p, s]) => {
            setRoom(r);
            setPrice(p);
            setServiceData(s);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   let type;

   room?.forEach((res) => {
      if (res.roomName === props.status.room) {
         type = res.roomType;
      }
   });

   const priceOfRoom = price?.find((res) => {
      if (res.roomType === type && res.method === props.status.method) {
         return res;
      }
   });

   const initState = {
      service: { name: "Nước suối", number: 0, price: 0 },
      services: [],
   };

   const SET_SERVICE = "set_service";
   const ADD_SERVICE = "add_service";
   const DELETE_SERVICE = "delete_service";

   const setService = (e) => {
      return {
         type: SET_SERVICE,
         e,
      };
   };
   const addService = (e) => {
      return {
         type: ADD_SERVICE,
         e,
      };
   };
   const delService = (e) => {
      return {
         type: DELETE_SERVICE,
         e,
      };
   };
   const reducer = (state, action) => {
      switch (action.type) {
         case SET_SERVICE:
            if (action.e.target.name === "name") {
               return {
                  ...state,
                  service: {
                     ...state.service,
                     [action.e.target.name]: action.e.target.value,
                  },
               };
            }
            if (action.e.target.name === "number") {
               var price;
               servicedata?.map((res) => {
                  if (res.name === state.service.name) {
                     price = res.price;
                  }
               });
               price = action.e.target.value * price;
               return {
                  ...state,
                  service: {
                     ...state.service,
                     [action.e.target.name]: action.e.target.value,
                     price: price,
                  },
               };
            }
            break;

         case ADD_SERVICE:
            return {
               ...state,
               services: [...state.services, state.service],
            };
            break;

         case DELETE_SERVICE:
            const newServices = [...state.services];
            newServices.splice(action.e, 1);
            return {
               ...state,
               services: newServices,
            };
            break;

         default:
            throw new Error("Invalid action!");
      }
   };

   const [state, dispatch] = useReducer(reducer, initState);
   const { service, services } = state;

   const prepayRef = useRef();
   const currentTime = timeNow();
   const currentDate = dateNow();
   const totalTime = subTime(props.status.hourIn, currentTime);
   const totalDate = subDate(
      formatDate(props.status.dateIn),
      formatDate(currentDate)
   );
   const roundTotalTime = roundTime(totalTime);
   const roomPrice =
      Number(priceOfRoom?.price) +
      (roundTotalTime - 1) * Number(priceOfRoom?.late);
   const newServices = [...state.services];
   const servicePrice = newServices?.reduce((total, current) => {
      return total + current.price;
   }, 0);
   const prepay = props.prepay ? props.prepay : 0;
   const totalPrice = roomPrice + servicePrice - prepay;

   const updateBill = () => {};

   const handleSave = () => {
      const newService = [...state.services];
      const mergeService = newService.reduce((total, current, index, array) => {
         const dup = total.find((item) => item.name === current.name);
         if (dup) {
            current.number = Number(current.number) + Number(dup.number);
            current.price = Number(current.price) + Number(dup.price);
            const totalnew = total.map((res) => {
               if (res.name === current.name) {
                  return current;
               } else {
                  return res;
               }
            });
            return totalnew;
         }
         return [...total, current];
      }, []);
      console.log(mergeService);
      // fetch(`http://localhost:8000/room-status/${props.status.id}`, {
      //    method: "PATCH",
      //    headers: { "Content-Type": "application/json" },
      //    body: JSON.stringify({
      //       ...props.status,
      //       services: mergeService,
      //    }),
      // });
   };

   const handleCheckOut = () => {};

   return (
      <Modal
         title={"Thanh toán " + props.status.room}
         setOpen={props.setOpen}
         body={
            <div className="check-out">
               <div>
                  <p>Tên khách hàng:</p>
                  <p>{props.status.customer}</p>
               </div>
               <div>
                  <p>Giờ vào:</p>
                  <div className="display time-date">
                     <p>{props.status.hourIn}</p>
                     <p>{formatDate(props.status.dateIn)}</p>
                  </div>
               </div>
               <div>
                  <p>Giờ ra:</p>
                  <div className="display time-date">
                     <p>{currentTime}</p>
                     <p>{formatDate(currentDate)}</p>
                  </div>
               </div>
               <div>
                  <p>Tổng thời gian:</p>
                  <div className="display time-date">
                     <p>{totalTime}</p>
                     <p>{totalDate}</p>
                  </div>
               </div>
               <div>
                  <p>Tổng tiền phòng:</p>
                  <div className="display time-date price">{roomPrice}</div>
               </div>
               <div className="service">
                  <p className="service__label">Dịch vụ</p>
                  <select
                     className="service__name"
                     name="name"
                     value={service.name}
                     onChange={(e) => {
                        dispatch(setService(e));
                     }}
                  >
                     {servicedata?.map((res) => (
                        <option key={res.id} value={res.name}>
                           {res.name}
                        </option>
                     ))}
                  </select>
                  <input
                     className="service__number"
                     type="number"
                     name="number"
                     min="1"
                     max="10"
                     value={service.number}
                     onChange={(e) => dispatch(setService(e))}
                  />
                  <BsPlusCircle
                     className="service__btn add"
                     onClick={(e) => dispatch(addService(e))}
                  />
                  <p className="service__price price">{servicePrice}</p>
               </div>

               {state.services.map((res, index) => (
                  <div key={index} className="service">
                     <p className="service__label"></p>
                     <p className="service__name">{res.name}</p>
                     <p className="service__number">{res.number}</p>

                     <BsTrash
                        className="service__btn delete"
                        name={index}
                        onClick={() => dispatch(delService(index))}
                     />
                     <p className="service__price price">{res.price}</p>
                  </div>
               ))}

               <div>
                  <p>Trả trước:</p>
                  <div className="display time-date price">{prepay}</div>
               </div>
               <div>
                  <p>Tổng tiền:</p>
                  <div className="display time-date price">
                     <p>{totalPrice}</p>
                  </div>
               </div>
            </div>
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

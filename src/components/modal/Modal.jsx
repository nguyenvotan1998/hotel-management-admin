import "./modal.scss";
import { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { ModalContext } from "../../App";

export default function Modal(props) {
   return (
      <div className="modal">
         <div className="modal__overlay"></div>
         <div className="modal__content">
            <div className="modal__header">
               <h2>{props.title}</h2>
               <FaRegTimesCircle
                  className="icon"
                  onClick={() => props.setOpen(false)}
               />
            </div>
            <div className="modal__body">{props.body}</div>
            <div className="modal__footer">{props.footer}</div>
         </div>
      </div>
   );
}

import "./modal.scss";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Modal(props) {
   const closeOutSide = (e) => {
      e.stopPropagation();
      const modal = document.getElementsByClassName("modal")[0];
      if (e.target == modal) {
         props.setOpen(false);
      }
   };

   const closeByIcon = (e) => {
      e.stopPropagation();
      props.setOpen(false);
   };

   return (
      <div className="modal" onClick={(e) => closeOutSide(e)}>
         <div className="modal__overlay"></div>
         <div className="modal__content">
            <div className="modal__header">
               <h2>{props.title}</h2>
               <FaRegTimesCircle
                  className="icon"
                  onClick={(e) => closeByIcon(e)}
               />
            </div>
            <div className="modal__body">{props.body}</div>
            <div className="modal__footer">{props.footer}</div>
         </div>
      </div>
   );
}

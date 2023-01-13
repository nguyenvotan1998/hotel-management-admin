import "./header.scss";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { memo } from "react";

function Header() {
   return (
      <div className="header">
         <div className="header__search">
            <BiSearch className="icon" />
            <input type="text" placeholder="Search here..." />
         </div>
         <div className="header__widget">
            <div className="header__noti">
               <FiBell className="icon" />
               <span className="number">2</span>
            </div>
            <div className="header__mess">
               <FiMessageSquare className="icon" />
               <span className="number">2</span>
            </div>
            <div className="header__profile">TN</div>
         </div>
      </div>
   );
}

export default memo(Header);

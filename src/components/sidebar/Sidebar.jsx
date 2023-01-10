import "./sidebar.scss";
import { memo, useState } from "react";
import { BsList } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { BiBed } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import {
   Outlet,
   NavLink,
   useLoaderData,
   Form,
   redirect,
} from "react-router-dom";

const menu = [
   {
      icon: "",
   },
];

function Sidebar() {
   const [open1, setOpen1] = useState(false);
   const [open2, setOpen2] = useState(false);
   const [open3, setOpen3] = useState(false);

   return (
      <div className="sidebar">
         <div className="sidebar__logo">
            <span className="logo">Tấn Nguyên</span>
            <BsList className="icon" />
         </div>
         <ul className="sidebar__list-link">
            <li className="item-link">
               <NavLink
                  to={`/`}
                  className={({ isActive, isPending }) =>
                     isActive ? "active" : isPending ? "pending" : ""
                  }
                  onClick={() => setOpen1(!open1)}
               >
                  <RxDashboard />
                  Home
                  {open1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
               </NavLink>
            </li>
            <li className="item-link">
               <NavLink
                  to={`/rooms`}
                  className={({ isActive, isPending }) =>
                     isActive ? "active" : isPending ? "pending" : ""
                  }
                  onClick={() => setOpen2(!open2)}
               >
                  <BiBed />
                  Room
                  {/* {open2 ? (
                     <IoIosArrowUp class="up" />
                  ) : ( */}
                  <IoIosArrowDown
                     className={(e) =>
                        open2 ? "dropdown activeDrop" : "dropdown"
                     }
                  />
                  {/* )} */}
               </NavLink>
               <ul
                  className={
                     open2 ? "sub-menu-lv2 open" : "sub-menu-lv2 hidden"
                  }
               >
                  <li>
                     <NavLink to={`/rooms/room-information`}>
                        Information
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={`/rooms/room-prices`}>Prices</NavLink>
                  </li>
               </ul>
            </li>
            <li className="item-link">
               <NavLink
                  to={`/customers`}
                  className={({ isActive, isPending }) =>
                     isActive ? "active" : isPending ? "pending" : ""
                  }
                  onClick={() => setOpen3(!open3)}
                  // className={active(isActive, isPending)}
               >
                  <FiUsers />
                  Customer
                  {open3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
               </NavLink>
               <ul
                  className={
                     open3 ? "sub-menu-lv2 open" : "sub-menu-lv2 hidden"
                  }
               >
                  <li>
                     <NavLink to={`/customers/`}>List of customers</NavLink>
                  </li>
                  <li>
                     <NavLink to={`/customers/revenue`}>
                        Revenue of customers
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={`/customers/blacklist`}>Blacklist</NavLink>
                  </li>
                  <li>
                     <NavLink to={`/customers/promotion`}>
                        Promotion for customers
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={`/customers/birthday`}>
                        Birthday of customers
                     </NavLink>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
}

export default memo(Sidebar);

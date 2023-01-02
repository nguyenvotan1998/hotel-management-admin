import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.scss";
import Modal from "./components/modal/Modal";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import RoomPage from "./pages/room/RoomPage";
import CustomerPage from "./pages/customers/CustomerPage";
import Revenue from "./pages/customers/revenue/Revenue";
import Blacklist from "./pages/customers/blacklist/Blacklist";
import Birthday from "./pages/customers/birthday/Birthday";

export const ModalContext = createContext();

function Main() {
   const [open, setOpen] = useState(false);

   return (
      <ModalContext.Provider value={[open, setOpen]}>
         <div className="content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/rooms" element={<RoomPage />} />
               <Route path="/customers/revenue" element={<Revenue />} />
               <Route path="/customers" element={<CustomerPage />}>
                  {/* <Route path="/customers/promotion" element={<Home />} /> */}
               </Route>
               <Route path="/customers/blacklist" element={<Blacklist />} />
               <Route path="/customers/birthday" element={<Birthday />} />
            </Routes>
         </div>
      </ModalContext.Provider>
   );
}

export default function App() {
   return (
      <div className="app">
         <Sidebar />
         <main className="main">
            <Header />
            <Main />
         </main>
      </div>
   );
}

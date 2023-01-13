import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import RoomPage from "./pages/room/RoomPage";
import CustomerPage from "./pages/customers/CustomerPage";
import Revenue from "./pages/customers/revenue/Revenue";
import Blacklist from "./pages/customers/blacklist/Blacklist";
import Birthday from "./pages/customers/birthday/Birthday";
import RoomPrices from "./pages/room/prices/RoomPrices";
import BillPage from "./pages/bill/BillPage";

function Main() {
   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/rooms/room-information" element={<RoomPage />} />
            <Route path="/rooms/room-prices" element={<RoomPrices />} />
            <Route path="/customers/revenue" element={<Revenue />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/customers/blacklist" element={<Blacklist />} />
            <Route path="/customers/birthday" element={<Birthday />} />
            <Route path="/bills" element={<BillPage />} />
         </Routes>
      </div>
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

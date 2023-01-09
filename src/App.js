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

function Main() {
   return (
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

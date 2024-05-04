import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Aboutpage from "../Pages/Aboutpage";
import Reservation from "../Pages/Reservation";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Confirmation from "../Pages/Confirmation";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

import { useState, useEffect } from "react";
import BookingTable from "../Componenets/Bookingtable";
import Confirmation from "../Pages/Confirmation";
import AppContext from "../AppContext";
import { fetchAPI } from "../API/api";

const Reservation = () => {
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const date = new Date();
    const times = fetchAPI(date);
    setAvailableTimes(times);
  }, []);

  const contextValut = { setConfirm, msg, setMsg, availableTimes };
  return (
    <>
      <AppContext.Provider value={contextValut}>
        {!confirm ? <BookingTable /> : <Confirmation conf={msg} />}
      </AppContext.Provider>
    </>
  );
};

export default Reservation;

import { useState } from "react";

function BookingForm({ token }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ service, date, time }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Novo Agendamento</h2>
      <input type="text" placeholder="Serviço" onChange={(e) => setService(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button type="submit">Agendar</button>
    </form>
  );
}

export default BookingForm;

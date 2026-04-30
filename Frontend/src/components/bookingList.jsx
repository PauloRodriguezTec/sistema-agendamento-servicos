import { useState, useEffect } from "react";

function BookingList({ token }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("http://localhost:5000/api/bookings", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await res.json();
      setBookings(data);
    };
    fetchBookings();
  }, [token]);

  const handleCancel = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` },
    });
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <div>
      <h2>Meus Agendamentos</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.service} - {booking.date} {booking.time}
            <button onClick={() => handleCancel(booking.id)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
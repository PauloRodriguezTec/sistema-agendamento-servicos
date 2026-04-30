import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>Sistema de Agendamento</h1>
      {!token ? (
        <>
          <LoginForm setToken={setToken} />
          <RegisterForm />
        </>
      ) : (
        <>
          <BookingForm token={token} />
          <BookingList token={token} />
        </>
      )}
    </div>
  );
}

export default App;

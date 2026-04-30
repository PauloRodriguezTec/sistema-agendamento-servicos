import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Cadastro realizado com sucesso! Faça login.");
    } else {
      alert(data.error || "Erro no cadastro");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default RegisterForm;
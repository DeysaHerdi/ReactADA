import { useState } from "react";

export default function Teste() {
  const [valor, setValor] = useState(0);
  function soma() {
    setValor(valor + 1);
  }
  function subtrai() {
    setValor(valor - 1);
  }
  return (
    <div>
      <h2>Texto teste</h2>
      <h1>Valor: {valor}</h1>
      <button onClick={soma}>+</button>
      <button onClick={subtrai}>-</button>
      <p>_________________________________________________</p>
    </div>
  );
}

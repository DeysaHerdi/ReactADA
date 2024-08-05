import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }
  return (
    <>
      <h1>Meu Contador: {contador}</h1>
      {contador > 5 ? <h3>Valor muito alto</h3> : null}
      <button onClick={aumentar}>aumentar</button>
    </>
  );
}

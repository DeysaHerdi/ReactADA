import { useState } from "react";
import styles from "../button.module.css";

export default function Estilos() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <p>. . . . . . . . . . </p>
      <h1>Meu Contador Estiloso</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>
        aumentar
      </button>
    </div>
  );
}

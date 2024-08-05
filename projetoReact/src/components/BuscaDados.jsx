import { useEffect, useState } from "react";

const tarefas = [
  { id: "1", title: "primeira" },
  { id: "2", title: "segunda" },
  { id: "3", title: "terceira" },
  { id: "4", title: "quarta" },
];

export default function BuscaDados() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {tarefa.title}
              {tarefa.completed ? <span color="red"> OK</span> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

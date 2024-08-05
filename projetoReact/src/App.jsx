import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";
import Teste from "./components/Teste";
import BuscaDados from "./components/BuscaDados";
import Estilos from "./components/Estilos";

export default function App() {
  return (
    <>
      <Teste></Teste>
      <h1>Olá mundoo!</h1>
      <p>- Componentes:</p>
      <MeuBotao conteudo="Clique aqui" />
      <MeuBotao conteudo="proximo" />
      <MeuBotao conteudo="fim!" />
      <MeuComponente />
      <p>- Estados e Eventos</p>
      <MeuContador />
      <p>- Listas e chaves</p>
      <MinhaLista />
      <BuscaDados />
      <Estilos />
    </>
  );
}

export default function MeuBotao(props) {
  return (
    <button onClick={() => console.log(props.conteudo)}>
      {props.conteudo}
    </button>
  );
}

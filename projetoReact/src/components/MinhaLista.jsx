import { useEffect, useState } from "react";

const minhaLista = [
  { id: "1", value: "Fruta" },
  { id: "2", value: "Legume" },
  { id: "3", value: "Carne" },
];
export default function MinhaLista() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  console.log(pesquisa);
  return (
    <div>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="pesquise aqui"
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );
}
// 6:21 min

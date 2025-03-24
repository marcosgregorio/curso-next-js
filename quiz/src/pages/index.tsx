import Questao from "@/components/Questao";
import { questoes } from "./api/bancoDeResposta";
import { useState } from "react";

export default function Home() {
  const [questao, setQuestao] = useState(questoes[0]);

  function respostaFornecida(indice: number) {
    console.log("resposta errada",questao.primeiraRespostaErrada);
    setQuestao(questao.answerWith(indice));
    console.log(indice);
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.answerWith(-1));
    }
    console.log("Tempo esgotado");
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Questao
        questao={questao}
        respostaFornecida={respostaFornecida}
        temporEsgotado={tempoEsgotado}
      />
    </div>
  );
}

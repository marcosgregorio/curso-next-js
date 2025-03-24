import { questoes } from "./api/bancoDeResposta";
import { useState } from "react";
import Questionario from "@/components/Questionario";

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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Questionario questao={questao} ultima={false} questaoRespondida={setQuestao} irParaProximoPasso={() => console.log("Próxima")}>

      </Questionario>
    </div>
  );
}

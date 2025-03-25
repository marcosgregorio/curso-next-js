import { questoes } from "./api/bancoDeResposta";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { debug } from "console";

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>(questoes[0]);
  const BASE_URL = "http://localhost:3000/api";
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);

  async function carregarIdsDasQuestoes() {
    try {
      const resp = await fetch(`${BASE_URL}/questionario`);
      const idsDasQuestoes: number[] = await resp.json();
      setIdsDasQuestoes(idsDasQuestoes);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function carregarQuestao(id: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questoes/${id}`);
      const data: QuestaoModel = await resp.json();
      const novaQuestao = QuestaoModel.fromObject(data);
      setQuestao(novaQuestao);
    } catch (error) {
      console.error("Erro ao carregar questão", error);
    }
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    if (idsDasQuestoes.length > 0) {
      carregarQuestao(idsDasQuestoes[0]);
    }
  }, [idsDasQuestoes]);

  function respostaFornecida(indice: number) {
    console.log("resposta errada", questao.primeiraRespostaErrada);
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
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={setQuestao}
        irParaProximoPasso={() => console.log("Próxima")}
      ></Questionario>
    </div>
  );
}

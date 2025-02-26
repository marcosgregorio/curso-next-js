import QuestaoModel from "@/model/questao";
import { JSX } from "react";
import styles from "@/styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

interface QuestaoProps {
  questao: QuestaoModel;
  respostaFornecida: (indice: number) => void;
}

const letras = [
  { valor: 'A', cor: '#F2C866' },
  { valor: 'B', cor: '#F266BA' },
  { valor: 'C', cor: '#85D4F2' },
  { valor: 'D', cor: '#BCE596' },
]

export default function Questao(props: QuestaoProps): JSX.Element {
  const questao = props.questao;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return <Resposta key={i + "_" + resposta}
        valor={resposta}
        indice={i}
        letra={letras[i].valor}
        corLetra={letras[i].cor}
        respostaFornecida={props.respostaFornecida}
      />;
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <div>
        {renderizarRespostas()}
      </div>
    </div>
  );
}

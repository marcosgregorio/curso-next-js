import QuestaoModel from "@/model/questao";
import Questao from "./Questao";
import Botao from "./Botao";
import styles from "@/styles/Questionario.module.css";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irParaProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
        props.questaoRespondida(props.questao.answerWith(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          questao={props.questao}
          respostaFornecida={respostaFornecida}
          temporEsgotado={props.irParaProximoPasso}
        />
      ) : null}
      <Botao onClick={props.irParaProximoPasso} texto={props.ultima ? "Finalizar" : "Próxima"} />
    </div>
  );
}

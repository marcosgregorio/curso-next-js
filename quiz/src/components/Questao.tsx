import QuestaoModel from "@/model/questao";
import { JSX } from "react";
import styles from "@/styles/Questao.module.css";
import Enunciado from "./Enunciado";

interface QuestaoProps {
  questao: QuestaoModel;
}

export default function Questao(props: QuestaoProps): JSX.Element {
  const questao = props.questao;

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
    </div>
  );
}

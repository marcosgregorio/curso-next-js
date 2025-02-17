import QuestaoModel from "@/model/questao";
import { JSX } from "react";
import styles from "@/styles/Questao.module.css";

interface QuestaoProps {
    questao: QuestaoModel;
}

export default function Questao (props: QuestaoProps): JSX.Element {
    
    return (
        <div className={styles.questao}>
            eba
        </div>
    )
}
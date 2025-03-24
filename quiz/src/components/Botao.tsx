import styles from "@/styles/Botao.module.css";
import Link from "next/link";

interface BotaoProps {
  href?: string;
  texto?: string;
  onClick?: () => void;
  desabilitado?: boolean;
}

function renderizarBotao(props: BotaoProps) {
  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.desabilitado}
        style={{
          backgroundColor: props.desabilitado ? "#979797" : "#9885f0",
        }}
      >
        {props.texto}
      </button>
    </div>
  );
}

function renderizarLink(props: BotaoProps) {
  return <Link href={props.href || ""}>{props.texto}</Link>;
}

export default function Botao(props: BotaoProps) {
  return (
    <div className={styles.botao}>
      {props.href ? renderizarLink(props) : renderizarBotao(props)}
    </div>
  )
}

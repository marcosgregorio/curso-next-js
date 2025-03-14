import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Questao from "@/components/Questao";
import { questoes } from "./api/bancoDeResposta";

export default function Home() {
  // const [questao, setques]
  function respostaFornecida(indice: number) {
    console.log(indice);
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
      <Questao questao={questoes[0]} respostaFornecida={respostaFornecida} />
    </div>
  );
}

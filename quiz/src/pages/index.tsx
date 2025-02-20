import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Questao from "@/components/Questao";
import { questoes } from "./api/bancoDeResposta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Questao questao={questoes[0]} />
    </div>
  );
}

import { useAppData } from "@/data/hook/useAppData";
import { sunIcon } from "../icons";
import Titulo from "./Titulo";
import BotaoAlternarTema from "./BotaoAlternarTema";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header className="flex">
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}></Titulo>
        <div className={`flex flex-grow justify-end items-center`}>
          <BotaoAlternarTema />
        </div>
    </header>
  );
}

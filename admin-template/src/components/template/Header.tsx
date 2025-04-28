import Titulo from "./Titulo";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}></Titulo>
    </header>
  );
}

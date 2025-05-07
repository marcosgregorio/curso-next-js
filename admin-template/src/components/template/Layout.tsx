import Conteudo from "./Conteudo";
import Header from "./Header";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col bg-gray-300  w-full p-7">
        <Header titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo> {props.children}</Conteudo>
      </div>
    </div>
  );
}

interface ConteudoProps {
  children?: React.ReactNode;
}

export default function Conteudo(props: ConteudoProps) {
  return <div className="flex flex-col mt-7">{props.children}</div>;
}

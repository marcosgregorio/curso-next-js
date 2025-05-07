interface ConteudoProps {
  children?: React.ReactNode;
}

export default function Conteudo(props: ConteudoProps) {
  return <div className="flex flex-col mt-7 dark:text-gray-200">{props.children}</div>;
}

import Link from "next/link";

interface MenuItem {
  url?: string;
  onClick?: (evento: any) => void;
  texto: string;
  icone: any;
  className?: string;
}
export default function MenuItem(props: MenuItem) {
  function renderizarLink(url: string) {
    return (
      <Link
        href={url}
        className={`
        flex flex-col items-center gap-1 h-20 justify-center text-xs w-25`}
      >
        {props.icone}
        <span className="text-gray-700">{props.texto}</span>
      </Link>
    );
  }

  return (
    <li className="hover:bg-gray-100 cursor-pointer">
      {props.url ? (
        renderizarLink(props.url)
      ) : (
        <div
          onClick={props.onClick}
          className={`
            ${props.className} flex flex-col
            items-center gap-1 h-20 justify-center
             text-xs w-25`}
        >
          {props.icone}
          <span>{props.texto}</span>
        </div>
      )}
    </li>
  );
}

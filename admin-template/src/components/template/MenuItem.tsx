import Link from "next/link";
import React from "react";

interface MenuItem {
  url?: string;
  onClick?: (evento: React.MouseEvent) => void;
  texto: string;
  icone: React.ReactNode;
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
        <span>{props.texto}</span>
      </Link>
    );
  }

  return (
    <li className="hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer text-gray-700 dark:text-gray-300">
      {props.url ? (
        renderizarLink(props.url)
      ) : (
        <div
          onClick={props.onClick}
          className={`
            ${props.className} flex flex-col
            items-center gap-1 h-20 justify-center
            transition-all duration-300
            text-xs w-25`}
        >
          <span className="">{props.icone}</span>
          <span>{props.texto}</span>
        </div>
      )}
    </li>
  );
}

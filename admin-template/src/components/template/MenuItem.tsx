import Link from "next/link";

interface MenuItem {
  url: string;
  texto: string;
  icone: any;
}
export default function MenuItem(props: MenuItem) {
  return (
    <li className="hover:bg-gray-100 cursor-pointer">
      <Link
        href={props.url}
        className={`
          flex flex-col items-center gap-1 h-20 justify-center text-xs w-25`
        }
      >
        <span className="text-gray-700">{props.icone}</span>
        <span className="text-gray-700">{props.texto}</span>
      </Link>
    </li>
  );
}

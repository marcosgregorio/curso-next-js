interface MenuItem {
    url: string;
    texto: string;
    icone: any;
}
export default function MenuItem(props: MenuItem) {

  return (
    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
      <span className="text-gray-700">{props.icone}</span>
      <span className="text-gray-700">{props.texto}</span>
    </li>
  );
}
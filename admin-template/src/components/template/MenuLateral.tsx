import { bellIcon, exitIcon, HomeIcon, settingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center h-20 w-2o bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" icone={HomeIcon} texto="Início" />
        <MenuItem url="/settings" icone={settingsIcon} texto="Configuração" />
        <MenuItem url="/notifications" icone={bellIcon} texto="Notificações" />
      </ul>
      <ul>
        <MenuItem
          onClick={() => {
            console.log("teste");
          }}
          icone={exitIcon}
          texto="Sair"
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}

import { bellIcon, HomeIcon, settingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
        <ul>
          <MenuItem url="/" icone={HomeIcon} texto="Início"/>
          <MenuItem url="/settings" icone={settingsIcon} texto="Configuração"/>
          <MenuItem url="/notifications" icone={bellIcon} texto="Notificações"/>
        </ul>
    </aside>
  );
}

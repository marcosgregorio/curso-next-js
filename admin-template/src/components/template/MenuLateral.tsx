import { HomeIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
        <ul>
          <MenuItem url="/" icone={HomeIcon} texto="Início"/>
        </ul>
    </aside>
  );
}

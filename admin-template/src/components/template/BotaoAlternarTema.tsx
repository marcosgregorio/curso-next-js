import { useAppData } from "@/data/hook/useAppData";
import { moonIcon, sunIcon } from "../icons";

export default function BotaoAlternarTema() {
  const { tema, alternarTema } = useAppData();
  return (
    <div className="relative flex h-10 w-22 transform duration-500 ease-in-out">
      <button
        className={`
            absolute flex gap-1
             dark:bg-gradient-to-r
            dark:from-yellow-600 to-yellow-900 
            p-2 rounded-full transition-opacity duration-300 
            ${tema === "dark" ? "opacity-100" : "opacity-0"}`}
        onClick={alternarTema}
      >
        <div>{sunIcon}</div>
        <span>Claro</span>
      </button>
      <button
        className={`
            absolute flex gap-1 p-2
            2 bg-gradient-to-r from-gray-600 to-gray-800
            bg-gray-200 dark:bg-gray-800
            rounded-full transition-opacity duration-300 
            ${tema === "dark" ? "opacity-0" : "opacity-100"}`}
        onClick={alternarTema}
      >
        <span>Escuro</span>
        <div>{moonIcon}</div>
      </button>
    </div>
  );
}

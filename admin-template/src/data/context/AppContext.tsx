import { createContext } from "react";
import { useState } from "react";

type Theme = "dark" | "light";

interface AppContextType {
  tema?: Theme;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextType>({});

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider(props: AppProviderProps) {
  const [tema, setTema] = useState<Theme>("dark");

  function alternarTema() {
    setTema(tema === "dark" ? "light" : "dark");
  }

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

import { defaultMaxListeners } from "events";
import App from "next/app";
import { createContext } from "react";

const AppContext = createContext({
    nome: "",
});

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider(props: AppProviderProps) {
  return (
    <AppContext.Provider
      value={{
        nome: "Marcos 42",
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

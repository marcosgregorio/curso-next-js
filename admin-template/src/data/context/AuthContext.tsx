import { createContext, useState } from "react";

interface AuthContextType {
    carregando?: boolean;
}

const AuthContext = createContext<AuthContextType>({});

export function AuthProvider(props: any) {
    const [carregando, setCarregando] = useState(true);
    return (
        <AuthContext.Provider
            value={{
                carregando: true,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
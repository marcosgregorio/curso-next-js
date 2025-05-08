import AuthInput from "@/components/auth/AuthInput";
import Image from "next/image";
import { useState } from "react";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submit = () => {
    if (modo === "login") {
      // Lógica de login
      console.log("Login", { email, senha });
    } else {
      // Lógica de cadastro
      console.log("Cadastro", { email, senha });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div >
        <Image src={"/BF.png"} alt="teste" width={500} height={50}/> 
      </div>
      <div className="flex flex-col gap-5 w-1/2">
        <h1
          className={`
            text-xl
            font-bold 
            text-center 
          `}
        >
          {modo === "login" ? "Login" : "Cadastro"}
        </h1>
        <AuthInput
          label="Email"
          valor={email}
          tipo="email"
          obrigatorio
          valorMudou={setEmail}
          somenteLeitura={false}
        />
        <AuthInput
          label="Senha"
          valor={senha}
          tipo="password"
          obrigatorio
          valorMudou={setSenha}
          somenteLeitura={false}
        />
        <button
          className={`
            w-full
            bg-indigo-500
            hover:bg-indigo-400
            text-white
            rounded-lg
            px-4 py-3
          `}
          onClick={submit}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-3 border-gray-300 w-full" />

        <button
          className={`
            w-full
            bg-red-500
            hover:bg-red-400
            text-white
            rounded-lg
            px-4 py-3
          `}
          onClick={submit}
        >
          {"Entrar com Google"}
        </button>
      </div>
    </div>
  );
}

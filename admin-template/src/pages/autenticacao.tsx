import AuthInput from "@/components/auth/AuthInput";
import { warningIcon } from "@/components/icons";
import { useState } from "react";

export default function Autenticacao() {
  const [mensagemErro, setMensagemErro] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(mensagem: string, tempoEmSegundos = 5) {
    setMensagemErro(mensagem);
    setTimeout(() => setMensagemErro(""), tempoEmSegundos * 1000);
  }

  const submit = () => {
    if (modo === "login") {
      console.log("Login", { email, senha });
      exibirErro("Ocorreu um erro no login");
    } else {
      console.log("Cadastro", { email, senha });
      exibirErro("Ocorreu um erro no cadastro");
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center h-screen bg-gray-200">
      <div className="">
        <img
          className="hidden md:block h-screen w-screen object-cover"
          src={
            "https://images.unsplash.com/photo-1726137570714-68c4d227b6b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="teste"
        />
      </div>
      <div className="flex flex-col gap-5 w-1/2 lg:3/3 p-5">
        <h1
          className={`
            text-xl
            font-bold 
            text-center 
          `}
        >
          {modo === "login" ? "Login" : "Cadastro"}
        </h1>

        {mensagemErro && (
          <div className="bg-red-400 border border-red-600 flex items-center text-white p-3 rounded-lg">
            {warningIcon(6)}
            <span className="text-center flex flex-grow justify-center">{mensagemErro}</span>
          </div>
        )}

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
            cursor-pointer
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
            cursor-pointer
          `}
          onClick={submit}
        >
          {"Entrar com Google"}
        </button>

        {modo === "login" ? (
          <div className="flex gap-2 items-center">
            <p>Já faz parte da nossa comunidade?</p>
            <span
              onClick={() => setModo("cadastro")}
              className="underline cursor-pointer text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Novo por aqui?
            </span>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <p>Já faz parte da nossa comunidade?</p>
            <span
              onClick={() => setModo("login")}
              className="underline cursor-pointer text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Já possui uma conta?
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface AuthInputProps {
  label: string;
  valor: any;
  tipo?: "text" | "email" | "password";
  obrigatorio?: boolean;
  valorMudou?: (novoValor: any) => void;
  somenteLeitura?: boolean;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label>{props.label}</label>
      <input
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
            px-4 py-3
            border border-gray-300 rounded-lg
            focus:outline-none
            focus:ring-2 focus:ring-indigo-500
            focus:border-transparent
            focus:bg-white
            ${props.somenteLeitura ? "bg-gray-200" : "bg-blue-50"}
        `}
      />
    </div>
  );
}

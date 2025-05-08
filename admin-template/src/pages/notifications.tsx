import Layout from "@/components/template/Layout";
import { useAppData } from "@/data/hook/useAppData";

export default function Notificacoes() {
  const contexto = useAppData();

  return (
    <Layout subtitulo="Notificacoes" titulo="Notificações">
    </Layout>
  );
}

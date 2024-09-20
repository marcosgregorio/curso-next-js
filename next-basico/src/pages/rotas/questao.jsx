import { useEffect, useState } from "react";

export default function questao() {
    const [questao, setQuestao] = useState(null);

    const renderizarLista = () => {
        if (questao) {
            return questao.respostas.map((resposta, i) => {
                return <li key={i}>{resposta.resposta}</li>
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/api/questao/1").then((resposta) => {
            return resposta.json()
        }).then((questao) => setQuestao(questao));
    }, [])
    
    return (
        <div>
            <h1>Questão</h1>
            <div>{questao?.enunciado}</div>
            <div>
                <ul>
                    {renderizarLista()}
                </ul>
            </div>
        </div>
    );
}
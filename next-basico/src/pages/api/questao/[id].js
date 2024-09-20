
export default function (req, res) {
    if (req.method === "GET") {
        res.status(200).json({
            id: req.query.id,
            enunciado: "Qual é a resposta para a vida, o universo e tudo mais?",
            respostas: [
                { resposta: "42", correta: true },
                { resposta: "24", correta: false },
                { resposta: "Não sei", correta: false },
                { resposta: "Talvez", correta: false }
            ]
        });
    } else {
        res.status(405).send();
    }
}
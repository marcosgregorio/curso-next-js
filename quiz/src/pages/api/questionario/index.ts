import { NextApiRequest, NextApiResponse } from "next";
import { questoes } from "../bancoDeResposta"
import { shuffle } from "@/functions/arrays";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const respostas = questoes.map(questao => questao.id);
    return res.status(200).json(respostas);
}

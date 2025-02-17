import { NextApiRequest, NextApiResponse } from "next";
import { questoes } from "../bancoDeResposta"
import { shuffle } from "@/functions/arrays";

export default function (req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(questoes.map(questao => questao.shuffleAnswers()));
}

import QuestaoModel from '@/model/questao';
import { questoes } from '../bancoDeResposta';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const id = Number(req.query?.id);
    const questao: QuestaoModel | undefined = questoes.find((questao: QuestaoModel) => questao.id === id);
    if (questao) {
        const obj = questao.answerWith(0);
        return res.status(200).json(obj);
    }
    return res.status(204).send(null);
}
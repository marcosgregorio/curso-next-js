import { shuffle } from "@/functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel {
  private _id: number;
  private _enunciado: string;
  private _respostas: RespostaModel[];
  private _acertou: boolean;

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean) {
    this._id = id;
    this._enunciado = enunciado;
    this._respostas = respostas;
    this._acertou = acertou;
  }

  static certa(valor: string) {
    return new RespostaModel(valor, true);
  }

  static errada() {}

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get enunciado(): string {
    return this._enunciado;
  }

  public set enunciado(value: string) {
    this._enunciado = value;
  }

  public get acertou(): boolean {
    return this._acertou;
  }

  public set acertou(value: boolean) {
    this._acertou = value;
  }

  public get respostas(): any[] {
    return this._respostas;
  }

  public set respostas(value: any[]) {
    this._respostas = value;
  }

  public get naoRespondida() {
    return !this.acertou;
  }

  public get primeiraRespostaErrada() {
    return this._respostas.findIndex((resposta) => {
      if (!resposta.certa) {
        return resposta;
      }
    });
  }

  shuffleAnswers() {
    let shuffledAnswers = shuffle(this._respostas);
    return new QuestaoModel(this._id, this._enunciado, shuffledAnswers, this._acertou);
  }

  answerWith(index: number): QuestaoModel {
    const isCorrect = this._respostas[index]?.certa;
    const answersToReveal = this._respostas.map((resposta, i) => {
      const selectedAnswer = index === i;
      const shouldReveal = selectedAnswer || resposta.certa;
      return shouldReveal ? resposta.show() : resposta;
    });

    return new QuestaoModel(this._id, this._enunciado, answersToReveal, isCorrect);
  }
}

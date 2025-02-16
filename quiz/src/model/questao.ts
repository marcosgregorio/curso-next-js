export default class QuestaoModel {
  private _id: number;
  private _enunciado: string;
  private _respostas: any[];
  private _acertou: boolean;

  constructor(id: number, enunciado: string, respostas: any[], acertou: boolean) {
    this._id = id;
    this._enunciado = enunciado;
    this._respostas = respostas;
    this._acertou = acertou;
  }

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
}

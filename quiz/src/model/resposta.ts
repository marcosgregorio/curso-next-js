export default class RepostaModel {
  private _valor: string;
  private _certa: boolean;
  private _revelada: boolean;

  constructor(valor: string, certa: boolean, revelada: boolean = false) {
    this._valor = valor;
    this._certa = certa;
    this._revelada = revelada;
  }

  // Getter e Setter para "valor"
  public get valor(): string {
    return this._valor;
  }

  public set valor(value: string) {
    this._valor = value;
  }

  // Getter e Setter para "certa"
  public get certa(): boolean {
    return this._certa;
  }

  public set certa(value: boolean) {
    this._certa = value;
  }

  // Getter e Setter para "revelada"
  public get revelada(): boolean {
    return this._revelada;
  }

  public set revelada(value: boolean) {
    this._revelada = value;
  }
}

export default abstract class Race {
  // ao atribuir como 'private', as variáveis poderão ser lidas mas não alteradas fora da classe 'Conta'.
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    // este encapsulamento permite a LEITURA da variável '_name' e protege para que essa variável não seja alterada diretamente fora da classe.
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances() {
    /* o método estático'createdRacesInstances irá retornar um número que corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race. */
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints() :number; 
  /* o método abstrato 'maxLifePoints' irá retornar um número que corresponde à quantidade máxima de pontos de vida da raça. */
}
import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static instancesCreated = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Orc.instancesCreated;
  }
}
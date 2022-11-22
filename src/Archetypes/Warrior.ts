import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static instancesCreated = 0;

  constructor(
    private _energyType: EnergyType = 'stamina',
    name: string,
  ) {
    super(name);
    Warrior.instancesCreated += 1;
  }

  get energyType() : EnergyType {
    return this._energyType;
  }

  static createdRacesInstances():number {
    return Warrior.instancesCreated;
  }
}
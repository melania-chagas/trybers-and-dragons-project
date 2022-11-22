import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static instancesCreated = 0;
  private readonly _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
    special?: number,
    cost?: number,
  ) {
    super(name, special, cost);
    Warrior.instancesCreated += 1;
  }

  get energyType() : EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Warrior.instancesCreated;
  }
}
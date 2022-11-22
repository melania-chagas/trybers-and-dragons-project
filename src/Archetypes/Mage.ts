import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _instancesCreated = 0;
  private readonly _energyType: EnergyType = 'mana';

  constructor(
    name: string,
    special?: number,
    cost?: number,
  ) {
    super(name, special, cost);
    Mage._instancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instancesCreated;
  }
}
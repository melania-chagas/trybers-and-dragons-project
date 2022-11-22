import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static instancesCreated = 0;

  constructor(
    private _energyType: EnergyType = 'mana',
    name: string,
  ) {
    super(name);
    Necromancer.instancesCreated += 1;
  }

  get energyType() : EnergyType {
    return this._energyType;
  }

  static createdRacesInstances():number {
    return Necromancer.instancesCreated;
  }
}
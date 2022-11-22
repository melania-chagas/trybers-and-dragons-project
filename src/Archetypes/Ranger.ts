import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static instancesCreated = 0;

  constructor(
    private _energyType: EnergyType = 'stamina',
    name: string,
  ) {
    super(name);
    Ranger.instancesCreated += 1;
  }

  get energyType() : EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger.instancesCreated;
  }
}
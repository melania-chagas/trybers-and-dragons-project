import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static instancesCreated = 0;

  constructor(
    private _energyType: EnergyType = 'mana',
    name: string,
  ) {
    super(name);
    Mage.instancesCreated += 1;
  }

  get energyType() : EnergyType {
    return this._energyType;
  }

  static createdRacesInstances():number {
    return Mage.instancesCreated;
  }
}
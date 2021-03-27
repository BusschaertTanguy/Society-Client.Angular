import { Gender } from '../../../shared/models/gender.enum';

export class Citizen {
  constructor(public readonly id: string, public readonly name: string) {}
}

export class CitizenDetailModel {
  constructor(public readonly id: string, public readonly gender: Gender, public readonly name: string, public readonly dateOfBirth: Date) {}
}

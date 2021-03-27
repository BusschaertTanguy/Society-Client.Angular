import { Citizen, CitizenDetailModel } from './citizen.model';

export class AddCitizen {
  public static readonly type = '[Citizen] Add Citizen';

  public constructor(public readonly citizen: CitizenDetailModel) {}
}

export class AddCitizens {
  public static readonly type = '[Citizen] Add Citizens';

  public constructor(public readonly citizens: Citizen[]) {}
}

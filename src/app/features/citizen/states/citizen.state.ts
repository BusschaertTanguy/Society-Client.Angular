import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddCitizen, AddCitizens } from './citizen.action';
import { Injectable } from '@angular/core';
import { Citizen, CitizenDetailModel } from './citizen.model';

export interface CitizenStateModel {
  citizen: CitizenDetailModel;
  citizens: Citizen[];
}

@Injectable()
@State<CitizenStateModel>({
  name: 'citizen',
})
export class CitizenState {
  @Selector()
  public static citizen(stateModel: CitizenStateModel): CitizenDetailModel {
    return stateModel.citizen;
  }

  @Selector()
  public static citizens(stateModel: CitizenStateModel): Citizen[] {
    return stateModel.citizens;
  }

  @Action(AddCitizen)
  public addCitizen(context: StateContext<CitizenStateModel>, action: AddCitizen): void {
    context.patchState({ citizen: action.citizen });
  }

  @Action(AddCitizens)
  public addCitizens(context: StateContext<CitizenStateModel>, action: AddCitizens): void {
    context.patchState({ citizens: action.citizens });
  }
}

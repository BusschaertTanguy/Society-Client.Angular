import { Injectable } from '@angular/core';
import { CitizenService } from './citizen.service';
import { Select, Store } from '@ngxs/store';
import { switchMap } from 'rxjs/operators';
import { AddCitizen, AddCitizens } from '../states/citizen.action';
import { CitizenState } from '../states/citizen.state';
import { Observable } from 'rxjs';
import { Citizen, CitizenDetailModel } from '../states/citizen.model';

@Injectable()
export class CitizenFacade {
  @Select(CitizenState.citizen) public citizen$: Observable<CitizenDetailModel>;
  @Select(CitizenState.citizens) public citizens$: Observable<Citizen[]>;

  constructor(private store: Store, private citizenService: CitizenService) {}

  public loadCitizen(id: string): void {
    this.citizenService
      .getCitizen(id)
      .pipe(switchMap((citizen: CitizenDetailModel) => this.store.dispatch(new AddCitizen(citizen))))
      .subscribe();
  }

  public loadCitizens(pageIndex: number, pageSize: number): void {
    this.citizenService
      .getCitizens(pageIndex, pageSize)
      .pipe(switchMap((citizens: Citizen[]) => this.store.dispatch(new AddCitizens(citizens))))
      .subscribe();
  }
}

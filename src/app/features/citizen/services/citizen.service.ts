import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Citizen, CitizenDetailModel } from '../states/citizen.model';

@Injectable()
export class CitizenService {
  private readonly servicePrefix = 'citizen';

  constructor(private http: HttpService) {}

  public getCitizens(pageIndex: number, pageSize: number): Observable<Citizen[]> {
    const queryParams = new HttpParams().append('pageIndex', pageIndex.toString()).append('pageSize', pageSize.toString());

    return this.http.get<Citizen[]>(`${this.servicePrefix}/citizens`, queryParams);
  }

  public getCitizen(id: string): Observable<CitizenDetailModel> {
    return this.http.get<CitizenDetailModel>(`${this.servicePrefix}/citizens/${id}`);
  }
}

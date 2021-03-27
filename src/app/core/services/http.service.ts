import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  constructor(@Inject('API') private api: string, private http: HttpClient) {}

  public get<T>(url: string, httpParams: HttpParams = new HttpParams()): Observable<T> {
    const endpoint = this.appendUrl(url);
    return this.http.get<T>(endpoint, { params: httpParams });
  }

  public post<T>(url: string, body: T): Observable<void> {
    const endpoint = this.appendUrl(url);
    return this.http.post<void>(endpoint, body);
  }

  public put<T>(url: string, body: T): Observable<void> {
    const endpoint = this.appendUrl(url);
    return this.http.put<void>(endpoint, body);
  }

  public delete(url: string): Observable<void> {
    const endpoint = this.appendUrl(url);
    return this.http.delete<void>(endpoint);
  }

  private appendUrl(url: string): string {
    return `${this.api}/${url}`;
  }
}

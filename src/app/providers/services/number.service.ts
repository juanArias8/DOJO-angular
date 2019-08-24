import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {AppNumber} from '../models/app.number';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private baseUrl = environment.apiUrl + 'decimal';

  constructor(private http: HttpClient) { }

  getRoman(numberValue: AppNumber): Observable<AppNumber> {
    return this.http.get<AppNumber>(this.baseUrl + '/' + numberValue.decimal);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  resolve() {
    return this.getList();
  }

  getList(): Observable<any> {
    return this.http.get(this.url + '/vacatures')
  }

  getItem(id: number): Observable<any> {
    return this.http.get(this.url + `/vacatures/` + id)
  }

}

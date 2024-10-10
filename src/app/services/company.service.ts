import { Injectable } from '@angular/core';
import { VacaturesService } from './vacancy.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  dataSub: any;
  dataItem: any;

  constructor(private readonly vacatureService: VacaturesService
  ) { }

  getListOpenVacancyCompany(companyId: number): Observable<any> {
    this.dataSub = this.vacatureService.getItem(companyId).subscribe(res => {
      this.dataItem = res;
    });
    return this.dataItem;
  }


}

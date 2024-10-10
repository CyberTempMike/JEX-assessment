import { Component } from '@angular/core';
import { CompanyContainerComponent } from '../company-container/company-container.component';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CompanyContainerComponent],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss'
})
export class VacancyListComponent {
  dataSub: any;
  data: any;

  constructor(private readonly vacancyService: VacancyService) { };

  ngOnInit(
  ) {
    this.retrieveVacatures();
  }

  retrieveVacatures(): any {
    this.dataSub = this.vacancyService.getList().subscribe(res => {
      this.data = res;
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}

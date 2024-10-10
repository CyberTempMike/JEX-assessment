import { Component } from '@angular/core';
import { VacancyListComponent } from '../../components/vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [VacancyListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

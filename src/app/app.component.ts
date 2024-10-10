import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, VacancyListComponent],
  providers: [VacancyService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JEX-assessment';
}

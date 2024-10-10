import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-detail-vacature-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-vacancy-container.component.html',
  styleUrl: './detail-vacancy-container.component.scss'
})
export class DetailVacancyContainer implements OnInit, OnChanges {
  @Input() id!: number;
  open_vacs: any;
  dataSub: any;
  constructor(private readonly vacancyService: VacancyService) {
  }

  ngOnInit(): void {
    this.vacancyService.getItem(this.id);
  }

  ngOnChanges(): void {
    this.dataSub = this.vacancyService.getItem(this.id).subscribe(res => {
      this.open_vacs = res;
    });
  }

}

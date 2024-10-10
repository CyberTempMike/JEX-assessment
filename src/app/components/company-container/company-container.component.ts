import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-container',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './company-container.component.html',
  styleUrl: './company-container.component.scss'
})
export class CompanyContainerComponent {
  @Input()
  company_name!: string;
  @Input()
  company_desc!: string;
  @Input()
  active_vacs!: number;
  @Input()
  company_id!: number;
}

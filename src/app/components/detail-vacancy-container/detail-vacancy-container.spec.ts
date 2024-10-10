import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailVacancyContainer } from './detail-vacancy-container.component';


describe('DetailVacaturePageComponent', () => {
  let component: DetailVacancyContainer;
  let fixture: ComponentFixture<DetailVacancyContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailVacancyContainer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailVacancyContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

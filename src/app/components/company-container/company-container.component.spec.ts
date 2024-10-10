import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyContainerComponent } from './company-container.component';

describe('CompanyContainerComponent', () => {
  let component: CompanyContainerComponent;
  let fixture: ComponentFixture<CompanyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

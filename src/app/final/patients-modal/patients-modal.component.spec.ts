import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsModalComponent } from './patients-modal.component';

describe('PatientsModalComponent', () => {
  let component: PatientsModalComponent;
  let fixture: ComponentFixture<PatientsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

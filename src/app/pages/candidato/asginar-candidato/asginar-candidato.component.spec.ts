import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsginarCandidatoComponent } from './asginar-candidato.component';

describe('AsginarCandidatoComponent', () => {
  let component: AsginarCandidatoComponent;
  let fixture: ComponentFixture<AsginarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsginarCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsginarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

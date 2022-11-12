import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyhirdetesComponent } from './egyhirdetes.component';

describe('EgyhirdetesComponent', () => {
  let component: EgyhirdetesComponent;
  let fixture: ComponentFixture<EgyhirdetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyhirdetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyhirdetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

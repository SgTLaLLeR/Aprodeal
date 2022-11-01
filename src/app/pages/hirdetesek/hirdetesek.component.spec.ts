import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirdetesekComponent } from './hirdetesek.component';

describe('HirdetesekComponent', () => {
  let component: HirdetesekComponent;
  let fixture: ComponentFixture<HirdetesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirdetesekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirdetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

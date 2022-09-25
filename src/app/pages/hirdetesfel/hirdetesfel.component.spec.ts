import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirdetesfelComponent } from './hirdetesfel.component';

describe('HirdetesfelComponent', () => {
  let component: HirdetesfelComponent;
  let fixture: ComponentFixture<HirdetesfelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirdetesfelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirdetesfelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

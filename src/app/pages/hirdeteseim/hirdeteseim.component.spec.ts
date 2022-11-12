import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirdeteseimComponent } from './hirdeteseim.component';

describe('HirdeteseimComponent', () => {
  let component: HirdeteseimComponent;
  let fixture: ComponentFixture<HirdeteseimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirdeteseimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirdeteseimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherprofComponent } from './otherprof.component';

describe('OtherprofComponent', () => {
  let component: OtherprofComponent;
  let fixture: ComponentFixture<OtherprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGridsComponent } from './single-grids.component';

describe('SingleGridsComponent', () => {
  let component: SingleGridsComponent;
  let fixture: ComponentFixture<SingleGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

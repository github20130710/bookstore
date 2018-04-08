import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDetailComponent } from './grid-detail.component';

describe('GridDetailComponent', () => {
  let component: GridDetailComponent;
  let fixture: ComponentFixture<GridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

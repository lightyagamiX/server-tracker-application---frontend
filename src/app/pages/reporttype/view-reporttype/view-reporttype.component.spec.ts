import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReporttypeComponent } from './view-reporttype.component';

describe('ViewReporttypeComponent', () => {
  let component: ViewReporttypeComponent;
  let fixture: ComponentFixture<ViewReporttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReporttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReporttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

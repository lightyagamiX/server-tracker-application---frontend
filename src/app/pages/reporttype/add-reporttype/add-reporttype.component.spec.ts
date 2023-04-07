import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReporttypeComponent } from './add-reporttype.component';

describe('AddReporttypeComponent', () => {
  let component: AddReporttypeComponent;
  let fixture: ComponentFixture<AddReporttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReporttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReporttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

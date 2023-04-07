import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThirdpartyComponent } from './add-thirdparty.component';

describe('AddThirdpartyComponent', () => {
  let component: AddThirdpartyComponent;
  let fixture: ComponentFixture<AddThirdpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThirdpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThirdpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

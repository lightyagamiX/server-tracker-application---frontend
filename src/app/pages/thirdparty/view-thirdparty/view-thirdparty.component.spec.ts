import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThirdpartyComponent } from './view-thirdparty.component';

describe('ViewThirdpartyComponent', () => {
  let component: ViewThirdpartyComponent;
  let fixture: ComponentFixture<ViewThirdpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewThirdpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewThirdpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

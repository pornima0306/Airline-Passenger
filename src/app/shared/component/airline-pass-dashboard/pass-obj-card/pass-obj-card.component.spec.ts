import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassObjCardComponent } from './pass-obj-card.component';

describe('PassObjCardComponent', () => {
  let component: PassObjCardComponent;
  let fixture: ComponentFixture<PassObjCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassObjCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassObjCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

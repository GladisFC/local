import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtneditsobremiComponent } from './btneditsobremi.component';

describe('BtneditsobremiComponent', () => {
  let component: BtneditsobremiComponent;
  let fixture: ComponentFixture<BtneditsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtneditsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtneditsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

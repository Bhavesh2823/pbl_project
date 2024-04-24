import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddeskComponent } from './hoddesk.component';

describe('HoddeskComponent', () => {
  let component: HoddeskComponent;
  let fixture: ComponentFixture<HoddeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

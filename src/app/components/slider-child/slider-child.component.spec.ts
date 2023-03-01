import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderChildComponent } from './slider-child.component';

describe('SliderChildComponent', () => {
  let component: SliderChildComponent;
  let fixture: ComponentFixture<SliderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

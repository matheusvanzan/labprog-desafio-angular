import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget4 } from './widget4';

describe('Widget4', () => {
  let component: Widget4;
  let fixture: ComponentFixture<Widget4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget4],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

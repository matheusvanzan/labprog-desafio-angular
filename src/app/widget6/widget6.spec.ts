import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget6 } from './widget6';

describe('Widget6', () => {
  let component: Widget6;
  let fixture: ComponentFixture<Widget6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget6],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

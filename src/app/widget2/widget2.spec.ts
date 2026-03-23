import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget2 } from './widget2';

describe('Widget2', () => {
  let component: Widget2;
  let fixture: ComponentFixture<Widget2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget2],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
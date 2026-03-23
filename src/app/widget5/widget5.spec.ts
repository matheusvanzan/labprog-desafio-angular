import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget5 } from './widget5';

describe('Widget5', () => {
  let component: Widget5;
  let fixture: ComponentFixture<Widget5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget5],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

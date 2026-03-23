import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget3 } from './widget3';

describe('Widget3', () => {
  let component: Widget3;
  let fixture: ComponentFixture<Widget3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget3],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

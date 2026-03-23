import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget7 } from './widget7';

describe('Widget7', () => {
  let component: Widget7;
  let fixture: ComponentFixture<Widget7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget7],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

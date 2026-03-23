import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget5 } from './widget5';

describe('Widget5', () => {
  let component: Widget5;
  let fixture: ComponentFixture<Widget5>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget5],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Widget5);
    component = fixture.componentInstance;
    component.user = {
      username: 'John Doe',
      email: 'john@example.com',
    };
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create', () => {
    fixture.detectChanges();

    const request = httpTesting.expectOne('https://dummyjson.com/quotes/random');
    expect(request.request.method).toBe('GET');

    request.flush({
      id: 1,
      quote: 'Testing keeps regressions away.',
      author: 'Angular Bot',
    });

    expect(component).toBeTruthy();
    expect(component.quote()?.quote).toBe('Testing keeps regressions away.');
    expect(component.quote()?.author).toBe('Angular Bot');
    expect(component.loading()).toBeFalse();
    expect(component.error()).toBeNull();
  });
});

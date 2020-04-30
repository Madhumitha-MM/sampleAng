import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPracComponent } from './http-prac.component';

describe('HttpPracComponent', () => {
  let component: HttpPracComponent;
  let fixture: ComponentFixture<HttpPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

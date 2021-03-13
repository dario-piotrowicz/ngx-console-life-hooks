import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUsingFrameworksComponent } from './example-using-frameworks.component';

describe('ExampleUsingFrameworksComponent', () => {
  let component: ExampleUsingFrameworksComponent;
  let fixture: ComponentFixture<ExampleUsingFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleUsingFrameworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUsingFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

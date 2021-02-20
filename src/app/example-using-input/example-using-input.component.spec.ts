import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUsingInputComponent } from './example-using-input.component';

describe('ExampleUsingInputComponent', () => {
  let component: ExampleUsingInputComponent;
  let fixture: ComponentFixture<ExampleUsingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleUsingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUsingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

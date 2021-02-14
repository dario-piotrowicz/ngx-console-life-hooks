import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUsingLabelComponent } from './example-using-label.component';

describe('ExampleUsingLabelComponent', () => {
  let component: ExampleUsingLabelComponent;
  let fixture: ComponentFixture<ExampleUsingLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleUsingLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUsingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorsDocComponent } from './custom-colors-doc.component';

describe('CustomColorsDocComponent', () => {
  let component: CustomColorsDocComponent;
  let fixture: ComponentFixture<CustomColorsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomColorsDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColorsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

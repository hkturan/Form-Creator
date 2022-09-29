import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSettingsComponent } from './checkbox-settings.component';

describe('CheckboxSettingsComponent', () => {
  let component: CheckboxSettingsComponent;
  let fixture: ComponentFixture<CheckboxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

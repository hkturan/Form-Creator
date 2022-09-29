import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxSettingsComponent } from './textbox-settings.component';

describe('TextboxSettingsComponent', () => {
  let component: TextboxSettingsComponent;
  let fixture: ComponentFixture<TextboxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

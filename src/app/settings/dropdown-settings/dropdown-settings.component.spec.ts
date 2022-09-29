import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSettingsComponent } from './dropdown-settings.component';

describe('DropdownSettingsComponent', () => {
  let component: DropdownSettingsComponent;
  let fixture: ComponentFixture<DropdownSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

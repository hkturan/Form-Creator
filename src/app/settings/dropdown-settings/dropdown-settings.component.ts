import {Component, Input, OnInit} from '@angular/core';
import {EnumPosition} from '../../../enums/enum-position';
import {DropdownEntity} from '../../../entities/dropdown.entity';
import {HelperUtil} from '../../../helper/helper-util';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import * as _ from 'lodash';
import {DropdownOptionEntity} from '../../../entities/dropdown-option.entity';
import {EnumFormElement} from '../../../enums/enum-form-element';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.css']
})
export class DropdownSettingsComponent implements OnInit {

  @Input() dropdown = new DropdownEntity();
  listEnumPosition = EnumPosition.values();
  selectedEnumPosition: EnumPosition;
  useLastSettings = false;
  dropdownOption = new DropdownOptionEntity();

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data && this.config.data.dropdown) {
      this.dropdown = _.cloneDeep(this.config.data.dropdown);
    }
  }

  ngOnInit(): void {
  }

  onClickConfirm(): void {
    if (this.useLastSettings) {
      HelperUtil.setSettings(EnumFormElement.DROPDOWN, this.dropdown);
    }
    this.ref.close(this.dropdown);
  }

  onClickCancel(): void {
    this.ref.close(null);
  }

  onClickAddOption(): void {
    this.dropdown.options.push(this.dropdownOption);
    this.dropdownOption = new DropdownOptionEntity();
  }

  onClickRemoveOption(option: DropdownOptionEntity): void {
    this.dropdown.options = this.dropdown.options.filter(e => e.value !== option.value);
    console.log(this.dropdown.options);
  }

  onClickSelectOption(option: DropdownOptionEntity): void {
    if (this.dropdown.selectedOption && this.dropdown.selectedOption.value === option.value) {
      this.dropdown.selectedOption = undefined;
      return;
    }
    this.dropdown.selectedOption = option;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CheckboxEntity} from '../../../entities/checkbox.entity';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import * as _ from 'lodash';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumFormElement} from '../../../enums/enum-form-element';

@Component({
  selector: 'app-checkbox-settings',
  templateUrl: './checkbox-settings.component.html',
  styleUrls: ['./checkbox-settings.component.css']
})
export class CheckboxSettingsComponent implements OnInit {

  @Input() checkbox = new CheckboxEntity();
  useLastSettings = false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data && this.config.data.checkbox) {
      this.checkbox = _.cloneDeep(this.config.data.checkbox);
    }
  }

  ngOnInit(): void {
  }

  onClickConfirm(): void {
    if (this.useLastSettings) {
      HelperUtil.setSettings(EnumFormElement.CHECKBOX, this.checkbox);
    }
    this.ref.close(this.checkbox);
  }

  onClickCancel(): void {
    this.ref.close(null);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ButtonEntity} from '../../../entities/button.entity';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {HelperUtil} from '../../../helper/helper-util';
import * as _ from 'lodash';
import {EnumCursor} from '../../../enums/enum-cursor';
import {EnumTextAlign} from '../../../enums/enum-text-align';
import {EnumFormElement} from '../../../enums/enum-form-element';

@Component({
  selector: 'app-button-settings',
  templateUrl: './button-settings.component.html',
  styleUrls: ['./button-settings.component.css']
})
export class ButtonSettingsComponent implements OnInit {

  @Input() button = new ButtonEntity();
  listEnumCursor = EnumCursor.values();
  listEnumTextAlign = EnumTextAlign.values();
  useLastSettings = false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data && this.config.data.button) {
      this.button = _.cloneDeep(this.config.data.button);
    }
  }

  ngOnInit(): void {
  }

  onClickConfirm(): void {
    if (this.useLastSettings) {
      HelperUtil.setSettings(EnumFormElement.BUTTON, this.button);
    }
    this.ref.close(this.button);
  }

  onClickCancel(): void {
    this.ref.close(null);
  }

}

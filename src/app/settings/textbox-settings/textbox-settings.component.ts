import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TextboxEntity} from '../../../entities/textbox.entity';
import {EnumPosition} from '../../../enums/enum-position';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import * as _ from 'lodash';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumFormElement} from '../../../enums/enum-form-element';

@Component({
  selector: 'app-textbox-settings',
  templateUrl: './textbox-settings.component.html',
  styleUrls: ['./textbox-settings.component.css']
})
export class TextboxSettingsComponent implements OnInit/*, OnDestroy*/ {

  @Input() textbox = new TextboxEntity();
  listEnumPosition = EnumPosition.values();
  useLastSettings = false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data && this.config.data.textbox) {
      this.textbox = _.cloneDeep(this.config.data.textbox);
    }
  }

  ngOnInit(): void {
  }

  onClickConfirm(): void {
    if (this.useLastSettings) {
      HelperUtil.setSettings(EnumFormElement.TEXTBOX, this.textbox);
    }
    this.ref.close(this.textbox);
  }

  onClickCancel(): void {
    this.ref.close(null);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {TableEntity} from '../../../entities/table.entity';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import * as _ from 'lodash';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumFormElement} from '../../../enums/enum-form-element';

@Component({
  selector: 'app-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: ['./table-settings.component.css']
})
export class TableSettingsComponent implements OnInit {

  @Input() table = new TableEntity();
  useLastSettings = false;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    if (this.config.data && this.config.data.table) {
      this.table = _.cloneDeep(this.config.data.table);
    }
  }

  ngOnInit(): void {
  }

  onClickConfirm(): void {
    if (this.useLastSettings) {
      HelperUtil.setSettings(EnumFormElement.TABLE, this.table);
    }
    this.ref.close(this.table);
  }

  onClickCancel(): void {
    this.ref.close(null);
  }

}

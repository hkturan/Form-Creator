import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Index} from '../../../entities';
import {CheckboxEntity} from '../../../entities/checkbox.entity';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {CheckboxSettingsComponent} from '../../settings/checkbox-settings/checkbox-settings.component';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumMessageSeverity} from '../../../enums/enum-message-severity';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() tableIndex;
  @Input() index: Index = new Index(0, 0);
  @Input() checkbox = new CheckboxEntity();
  @Output() eventEmitterDeleteCompIndex = new EventEmitter<Index>();
  menuItems = [];

  constructor(private confirmationService: ConfirmationService,
              private dialogService: DialogService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        command: () => { this.onClickSettings(); }
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => { this.onClickDelete(); }
      }
    ];
  }

  onClickSettings(): void {
    const ref = this.dialogService.open(CheckboxSettingsComponent, {
      header: 'Settings',
      width: '600px',
      data: {
        checkbox: this.checkbox
      }
    });
    ref.onClose.subscribe((checkbox: CheckboxEntity) => {
      if (checkbox) {
        this.checkbox = checkbox;
      }
    });
  }

  onClickDelete(): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete Checkbox?',
      key: 'confirmDialogKeyDelete' + this.index.row + this.index.column + this.tableIndex,
      accept: () => {
        this.eventEmitterDeleteCompIndex.emit(this.index);
        HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, 'Checkbox Deleted');
      }
    });
  }

  getPxStringForPadding(value: number): string {
    return value === 0 ? '' : 'px';
  }

}

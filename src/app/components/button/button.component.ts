import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Index} from '../../../entities';
import {ButtonEntity} from '../../../entities/button.entity';
import {EnumCursor} from '../../../enums/enum-cursor';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {ButtonSettingsComponent} from '../../settings/button-settings/button-settings.component';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumMessageSeverity} from '../../../enums/enum-message-severity';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() tableIndex;
  @Input() index: Index = new Index(0, 0);
  @Input() button = new ButtonEntity();
  @Output() eventEmitterDeleteCompIndex = new EventEmitter<Index>();
  enumCursor = EnumCursor;
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
    const ref = this.dialogService.open(ButtonSettingsComponent, {
      header: 'Settings',
      width: '600px',
      data: {
        button: this.button
      }
    });
    ref.onClose.subscribe((button: ButtonEntity) => {
      if (button) {
        this.button = button;
      }
    });
  }

  onClickDelete(): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete Button?',
      key: 'confirmDialogKeyDelete' + this.index.row + this.index.column + this.tableIndex,
      accept: () => {
        this.eventEmitterDeleteCompIndex.emit(this.index);
        HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, 'Button Deleted');
      }
    });
  }

  getPxStringForPadding(value: number): string {
    return value === 0 ? '' : 'px';
  }

}

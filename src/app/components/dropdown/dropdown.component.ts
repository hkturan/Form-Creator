import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Index} from '../../../entities';
import {DropdownEntity} from '../../../entities/dropdown.entity';
import {EnumPosition} from '../../../enums/enum-position';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DropdownSettingsComponent} from '../../settings/dropdown-settings/dropdown-settings.component';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumMessageSeverity} from '../../../enums/enum-message-severity';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() tableIndex;
  @Input() index: Index = new Index(0, 0);
  @Input() dropdown = new DropdownEntity();
  @Output() eventEmitterDeleteCompIndex = new EventEmitter<Index>();
  enumPosition = EnumPosition;
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
    const ref = this.dialogService.open(DropdownSettingsComponent, {
      header: 'Settings',
      width: '900px',
      data: {
        dropdown: this.dropdown
      }
    });
    ref.onClose.subscribe((dropdown: DropdownEntity) => {
      if (dropdown) {
        this.dropdown = dropdown;
      }
    });
  }

  onClickDelete(): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete Dropdown?',
      key: 'confirmDialogKeyDelete' + this.index.row + this.index.column + this.tableIndex,
      accept: () => {
        this.eventEmitterDeleteCompIndex.emit(this.index);
        HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, 'Dropdown Deleted');
      }
    });
  }

  getPxStringForPadding(value: number): string {
    return value === 0 ? '' : 'px';
  }

}

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ElementEntity} from '../../../entities/element.entity';
import {TextboxEntity} from '../../../entities/textbox.entity';
import {EnumPosition} from '../../../enums/enum-position';
import {DialogService} from 'primeng/dynamicdialog';
import {TextboxSettingsComponent} from '../../settings/textbox-settings/textbox-settings.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Index} from '../../../entities';
import {HelperUtil} from '../../../helper/helper-util';
import {EnumMessageSeverity} from '../../../enums/enum-message-severity';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() tableIndex;
  @Input() index: Index = new Index(0, 0);
  @Input() textbox: TextboxEntity = new TextboxEntity();
  @Output() eventEmitterDeleteCompIndex = new EventEmitter<Index>();
  enumPosition = EnumPosition;
  menuItems = [];

  constructor(private confirmationService: ConfirmationService,
              private dialogService: DialogService,
              private messageService: MessageService) { }

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
    const ref = this.dialogService.open(TextboxSettingsComponent, {
      header: 'Settings',
      width: '900px',
      data: {
        textbox: this.textbox
      }
    });
    ref.onClose.subscribe((textbox: TextboxEntity) => {
      if (textbox) {
        this.textbox = textbox;
      }
    });
  }

  onClickDelete(): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete Textbox?',
      key: 'confirmDialogKeyDelete' + this.index.row + this.index.column + this.tableIndex,
      accept: () => {
        this.eventEmitterDeleteCompIndex.emit(this.index);
        HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, 'Textbox Deleted');
      }
    });
  }

  getPxStringForPadding(value: number): string {
    return value === 0 ? '' : 'px';
  }

}

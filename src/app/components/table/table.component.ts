import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumFormElement} from '../../../enums/enum-form-element';
import {Constants} from '../../../helper/constants';
import {DialogService} from 'primeng/dynamicdialog';
import {TableEntity} from '../../../entities/table.entity';
import {Components} from '../../../entities/components';
import {Index} from '../../../entities';
import {TableSettingsComponent} from '../../settings/table-settings/table-settings.component';
import {HelperUtil} from '../../../helper/helper-util';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EnumMessageSeverity} from '../../../enums/enum-message-severity';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() draggedFormElement: EnumFormElement;
  @Input() table = new TableEntity();
  @Input() index;
  @Output() eventEmitterDeleteTableIndex = new EventEmitter<number>();
  listComponents: Components[] = [];
  enumFormElement = EnumFormElement;

  constructor(private confirmationService: ConfirmationService,
              private dialogService: DialogService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  findTableDiv(node: any): any {
    if (node.className.includes(Constants.DIV_TABLE_CELL_CLASS_NAME)) {
      return node;
    } else if (node.parentNode) {
      return this.findTableDiv(node.parentNode);
    }
    return null;
  }

  drop(event: any, rowIndex: number, colIndex: number): void {
    const tableDiv = this.findTableDiv(event.target);
    if (tableDiv.children.length !== 0) {
      return;
    }
    const components = new Components();
    const index = new Index(rowIndex, colIndex);
    components.index = index;
    components.value = this.draggedFormElement;
    components.entity = HelperUtil.getSettings(this.draggedFormElement);
    this.effectTableDiv(event.target, false);
    this.openCompSettings(components);
  }

  dragEnter(event: any): void {
    this.effectTableDiv(event.target, true);
  }

  dragLeave(event: any): void {
    this.effectTableDiv(event.target, false);
  }

  effectTableDiv(tableDivP: any, isEnter: boolean): void {
    const tableDiv = this.findTableDiv(tableDivP);
    if (!tableDiv || this.draggedFormElement === EnumFormElement.TABLE) {
      return;
    }
    if (tableDiv.children.length !== 0) {
      // TODO
      return;
    }
    tableDiv.style.backgroundColor = isEnter ? '#007bff' : null;
  }

  openCompSettings(components: Components): void {
    const ref = this.dialogService.open(this.draggedFormElement.component, {
      header: 'Settings',
      data: {
        [this.draggedFormElement.variableName]: components.entity
      },
      width: this.draggedFormElement.dialogWidth
    });
    ref.onClose.subscribe((entity: any) => {
      if (entity) {
        components.entity = entity;
        this.listComponents.push(components);
      }
    });
  }

  openTableSettings(): void {
    const ref = this.dialogService.open(TableSettingsComponent, {
      header: 'Settings',
      width: '478px',
      data: {
        table: this.table
      }
    });
    ref.onClose.subscribe((table: TableEntity) => {
      if (table) {
        this.table = table;
      }
    });
  }

  onClickDelete(): void {
    this.confirmationService.confirm({
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete Table?',
      key: 'confirmDialogKeyDeleteTable' + this.index,
      accept: () => {
        this.eventEmitterDeleteTableIndex.emit(this.index);
        HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, 'Table Deleted');
      }
    });
  }

  eventEmitterDeleteComp(index: Index): void {
    const obj = this.listComponents.find(e => e.index === index);
    if (!obj) {
      return;
    }
    this.listComponents.splice(this.listComponents.indexOf(obj), 1);
  }

  // Parent Methods
  setDraggedFormElement(draggedFormElement: EnumFormElement): void {
    this.draggedFormElement = draggedFormElement;
  }

}

import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EnumFormElement} from '../enums/enum-form-element';
import {Constants} from '../helper/constants';
import {DialogService} from 'primeng/dynamicdialog';
import {TableSettingsComponent} from './settings/table-settings/table-settings.component';
import {Components} from '../entities/components';
import {TableEntity} from '../entities/table.entity';
import {HelperUtil} from '../helper/helper-util';
import * as jQuery from 'jquery';
import {MessageService} from 'primeng/api';
import {EnumMessageSeverity} from '../enums/enum-message-severity';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  enumFormElements = EnumFormElement.values();
  selectedEnumFormElement: EnumFormElement;
  draggedFormElement: EnumFormElement;
  constants = Constants;
  listComponents: Components[] = [];
  listClearTagWithoutContent = [];
  displayPreview = false;
  html = '';

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private dialogService: DialogService,
              private el: ElementRef,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.setListClearTagWithoutContent();
  }

  dragStart(enumFormElement: EnumFormElement): void {
    this.drag(enumFormElement, true);
  }

  dragEnd(): void {
    this.drag(null, false);
  }

  drag(enumFormElement, isStart): void {
    this.draggedFormElement = isStart ? enumFormElement : null;
  }

  drop(): void {
    if (this.draggedFormElement !== EnumFormElement.TABLE) {
      return;
    }
    const components = new Components();
    components.entity = HelperUtil.getSettings(EnumFormElement.TABLE);
    this.effectPanelDiv(false);
    this.openSettings(components);
  }

  dragEnter(event: any): void {
    this.effectPanelDiv(true);
  }

  dragLeave(event: any): void {
    this.effectPanelDiv(false);
  }

  effectPanelDiv(isEnter: boolean): void {
    const panelDiv = document.getElementById(Constants.DIV_PANEL_ID);
    if (!panelDiv || this.draggedFormElement !== EnumFormElement.TABLE) {
      return;
    }
    panelDiv.style.backgroundColor = isEnter ? '#d2d4db' : null;
  }

  openSettings(components: Components): void {
    if (this.draggedFormElement === EnumFormElement.TABLE) {
      const ref = this.dialogService.open(TableSettingsComponent, {
        header: 'Settings',
        width: '478px',
        data: {
          table: components.entity
        }
      });
      ref.onClose.subscribe((table: TableEntity) => {
        if (table) {
          components.entity = table;
          this.listComponents.push(components);
        }
      });
    }
  }

  getHTML(): string {
    let html = this.el.nativeElement
      .querySelector('.panel')
      .outerHTML
      .replace(/<!--[\s\S]*?-->/g, '');
    html = this.clearDivWithId(html, 'hoverButton');
    html = this.clearTag(html, 'p-badge');
    html = this.clearTag(html, 'p-confirmdialog');
    html = this.clearTag(html, 'p-contextmenu');
    for (const searchValue of this.listClearTagWithoutContent) {
      html = html.replace(searchValue, '');
    }
    html = this.process(html);
    this.copyToClipboard(html);
    return html;
  }

  setListClearTagWithoutContent(): void {
    this.listClearTagWithoutContent.push(/<[\/]?(app-textbox)[^><]*>/g);
    this.listClearTagWithoutContent.push(/<[\/]?(app-table)[^><]*>/g);
    this.listClearTagWithoutContent.push(/<[\/]?(app-checkbox)[^><]*>/g);
    this.listClearTagWithoutContent.push(/<[\/]?(app-button)[^><]*>/g);
    this.listClearTagWithoutContent.push(/<[\/]?(app-dropdown)[^><]*>/g);
    this.listClearTagWithoutContent.push(/_ngcontent(.*?)="(.*?)"/g);
    this.listClearTagWithoutContent.push(/pdroppable(.*?)="(.*?)"/g);
    this.listClearTagWithoutContent.push(/class="(.*?)"/g);
    this.listClearTagWithoutContent.push(/ng-reflect-scope="(.*?)"/g);
    this.listClearTagWithoutContent.push('min-height: 30px; ');
  }

  clearTag(value: string, tag: string): string {
    const div = document.createElement('div');
    div.innerHTML = value;
    const elements = div.getElementsByTagName(tag);
    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    return div.innerHTML;
  }

  clearDivWithId(html: string, id: string): string {
    const jHtmlObject = jQuery(html);
    const editor = jQuery('<p>').append(jHtmlObject);
    editor.find('#' + id).remove();
    const newHtml = editor.html();
    return newHtml;
  }

  onClickPreview(): void {
    this.html = this.getHTML();
    this.displayPreview = true;
  }

  onClickDownload(): void {
    this.html = this.getHTML();
    const blob = new Blob([this.html], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'FormCreator_' + Number(new Date()) + '.html');
  }

  onClickClearSettings(): void {
    HelperUtil.clearSettings(this.selectedEnumFormElement);
    HelperUtil.showMessage(this.messageService, EnumMessageSeverity.SUCCESS, this.selectedEnumFormElement.text + ' Cleared');
  }

  copyToClipboard(item): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  process(str): void {
    const div = document.createElement('div');
    div.innerHTML = str.trim();
    return this.format(div, 0).innerHTML;
  }

  format(node, level): any {
    const indentBefore = new Array(level++ + 1).join('  ');
    const indentAfter = new Array(level - 1).join('  ');
    let textNode;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode('\n' + indentBefore);
      node.insertBefore(textNode, node.children[i]);
      this.format(node.children[i], level);
      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode('\n' + indentAfter);
        node.appendChild(textNode);
      }
    }
    return node;
  }

  eventEmitterDeleteTable(index: number): void {
    this.listComponents.splice(index, 1);
  }

}

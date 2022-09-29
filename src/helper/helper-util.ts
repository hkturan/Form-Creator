import {Defaults} from './defaults';
import {Message, MessageService} from 'primeng/api';
import {EnumFormElement} from '../enums/enum-form-element';
import {EnumMessageSeverity} from '../enums/enum-message-severity';

export class HelperUtil {

  static setSettings(enumFormElement: EnumFormElement, settings: any): void {
    window.sessionStorage.setItem(enumFormElement.variableName + 'Settings', JSON.stringify(settings));
  }

  static getSettings(enumFormElement: EnumFormElement): any {
    const settings = window.sessionStorage.getItem(enumFormElement.variableName + 'Settings');
    return settings ? JSON.parse(settings) : Defaults['get' + enumFormElement.methodName]();
  }

  static clearSettings(enumFormElement: EnumFormElement): void {
    window.sessionStorage.removeItem(enumFormElement.variableName + 'Settings');
  }

  static showMessage(messageService: MessageService, messageSeverity: EnumMessageSeverity, details: string): void {
    messageService.add({
      key: 'generalToast',
      severity: messageSeverity.severity,
      summary: messageSeverity.text,
      detail: details
    });
  }

}

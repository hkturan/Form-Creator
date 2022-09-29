import {Enum, EnumType} from 'ts-jenum';
import {TextboxSettingsComponent} from '../app/settings/textbox-settings/textbox-settings.component';
import {TableSettingsComponent} from '../app/settings/table-settings/table-settings.component';
import {DropdownSettingsComponent} from '../app/settings/dropdown-settings/dropdown-settings.component';
import {CheckboxSettingsComponent} from '../app/settings/checkbox-settings/checkbox-settings.component';
import {ButtonSettingsComponent} from '../app/settings/button-settings/button-settings.component';

@Enum('text')
export class EnumFormElement extends EnumType<EnumFormElement>() {

  static readonly TABLE = new EnumFormElement(1, 'Table', 'Table', 'table', '#007bff', 'pi pi-table', true, TableSettingsComponent, '478px');
  static readonly TEXTBOX = new EnumFormElement(2, 'Textbox', 'Textbox', 'textbox', '#CE1126', 'pi pi-ticket', false, TextboxSettingsComponent, '900px');
  static readonly DROPDOWN = new EnumFormElement(3, 'Dropdown', 'Dropdown', 'dropdown', '#008337', 'pi pi-caret-down', false, DropdownSettingsComponent, '900px');
  static readonly CHECKBOX = new EnumFormElement(4, 'Checkbox', 'Checkbox', 'checkbox', '#002D52', 'pi pi-check-square', false, CheckboxSettingsComponent, '600px');
  static readonly BUTTON = new EnumFormElement(5, 'Button', 'Button', 'button', '#d2820f', 'pi pi-send', false, ButtonSettingsComponent, '600px');

  private constructor(readonly code: number, readonly text: string, readonly methodName: string, readonly variableName: string, readonly color: string, readonly icon: string, readonly seperateAfter: boolean, readonly component: any, readonly dialogWidth: string) {
    super();
  }
}

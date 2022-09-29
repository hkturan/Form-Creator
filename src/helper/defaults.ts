import {ElementEntity} from '../entities/element.entity';
import {BorderEntity} from '../entities/border.entity';
import {FontEntity} from '../entities/font.entity';
import {EnumBorderStyle} from '../enums/enum-border-style';
import {DropdownEntity} from '../entities/dropdown.entity';
import {EnumPosition} from '../enums/enum-position';
import {PaddingEntity} from '../entities/paddingentity';
import {TextboxEntity} from '../entities/textbox.entity';
import {CheckboxEntity} from '../entities/checkbox.entity';
import {ButtonEntity} from '../entities/button.entity';
import {EnumCursor} from '../enums/enum-cursor';
import {EnumTextAlign} from '../enums/enum-text-align';
import {TableEntity} from '../entities/table.entity';

export class Defaults {

  static getElementTextbox(): ElementEntity {
    // Border
    const border = this.getBorder();

    // Font
    const font = this.getFont();

    // Element
    const element = new ElementEntity();
    element.border = border;
    element.font = font;
    element.height = 33;
    element.width = '50%';
    element.value = '';
    element.marginLeft = 0;
    element.marginBottom = 0;
    element.id = '';
    element.name = '';
    return element;
  }

  static getElementLabel(): ElementEntity {
    // Border
    const border = this.getBorder();
    border.style = EnumBorderStyle.NONE;

    // Font
    const font = this.getFont();
    font.weight = 600;

    // Element
    const element = new ElementEntity();
    element.border = border;
    element.font = font;
    element.width = '50%';
    element.value = 'Value';
    element.marginLeft = 0;
    element.marginBottom = 0;
    element.id = '';
    element.name = '';
    return element;
  }

  static getElementDropdown(): ElementEntity {
    // Border
    const border = this.getBorder();

    // Font
    const font = this.getFont();

    // Element
    const element = new ElementEntity();
    element.border = border;
    element.font = font;
    element.height = 33;
    element.width = '50%';
    element.value = '';
    element.id = '';
    element.name = '';
    return element;
  }

  static getTextbox(): TextboxEntity {
    const textbox = new TextboxEntity();
    textbox.labelElement = this.getElementLabel();
    textbox.inputElement = this.getElementTextbox();
    textbox.labelPosition = EnumPosition.LEFT;
    textbox.padding = this.getPadding();
    textbox.placeHolder = '';
    return textbox;
  }

  static getDropdown(): DropdownEntity {
    const dropdown = new DropdownEntity();
    dropdown.labelElement = this.getElementLabel();
    dropdown.inputElement = this.getElementDropdown();
    dropdown.labelPosition = EnumPosition.LEFT;
    dropdown.padding = this.getPadding();
    dropdown.options = [];
    dropdown.selectedOption = undefined;
    return dropdown;
  }

  static getCheckbox(): CheckboxEntity {
    const checkbox = new CheckboxEntity();
    checkbox.id = '';
    checkbox.name = '';
    checkbox.padding = this.getPadding();
    checkbox.labelElement = this.getElementLabel();
    checkbox.backgroundColor = '#0075ff';
    checkbox.labelElement.lineHeight = 2;
    checkbox.labelElement.marginLeft = 5;
    checkbox.zoom = 1.5;
    return checkbox;
  }

  static getButton(): ButtonEntity {
    // Border
    const border = this.getBorder();
    border.color = '#008efd';

    // Font
    const font = this.getFont();
    font.color = '#eaeaea';

    const button = new ButtonEntity();
    button.id = '';
    button.name = '';
    button.padding = this.getPadding();
    button.height = 33;
    button.font = font;
    button.border = border;
    button.backgroundColor = '#008efd';
    button.cursor = EnumCursor.POINTER;
    button.value = 'Button';
    button.textAlign = EnumTextAlign.CENTER;
    return button;
  }

  static getFont(): FontEntity {
    const font = new FontEntity();
    font.color = '#495057';
    font.weight = 400;
    font.size = 14;
    font.family = 'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    return font;
  }

  static getBorder(): BorderEntity {
    const border = new BorderEntity();
    border.color = '#b4b4b4';
    border.width = 1;
    border.style = EnumBorderStyle.SOLID;
    border.radius = 5;
    return border;
  }

  static getPadding(): PaddingEntity {
    const padding = new PaddingEntity();
    padding.left = 10;
    padding.right = 10;
    padding.top = 10;
    padding.bottom = 10;
    return padding;
  }

  static getTable(): TableEntity {
    const table = new TableEntity();
    table.rowCount = 1;
    table.columnCount = 1;
    return table;
  }

}

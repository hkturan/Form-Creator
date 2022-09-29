import {EnumFormElement} from '../enums/enum-form-element';
import {Index} from './index';

export interface Components {
  value: EnumFormElement;
  index: Index;
  entity: any;
}

export class Components {
  constructor() {
    this.index = new Index(1, 1);
  }
}

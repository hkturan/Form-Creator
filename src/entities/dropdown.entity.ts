import {BaseEntity} from './base.entity';
import {ElementEntity} from './element.entity';
import {DropdownOptionEntity} from './dropdown-option.entity';
import {EnumPosition} from '../enums/enum-position';
import {PaddingEntity} from './paddingentity';

export interface DropdownEntity {
  selectedOption: DropdownOptionEntity;
  options: DropdownOptionEntity[];
  labelElement: ElementEntity;
  inputElement: ElementEntity;
  labelPosition: EnumPosition;
  padding: PaddingEntity;
}

export class DropdownEntity extends BaseEntity {
  constructor() {
    super();
  }
}

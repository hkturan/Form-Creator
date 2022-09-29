import {ElementEntity} from './element.entity';
import {EnumPosition} from '../enums/enum-position';
import {BaseEntity} from './base.entity';
import {PaddingEntity} from './paddingentity';

export interface TextboxEntity {
  labelElement: ElementEntity;
  inputElement: ElementEntity;
  labelPosition: EnumPosition;
  padding: PaddingEntity;
  placeHolder: string;
}

export class TextboxEntity extends BaseEntity {
  constructor() {
    super();
  }
}

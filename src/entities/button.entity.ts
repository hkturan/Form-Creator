import {FontEntity} from './font.entity';
import {BaseEntity} from './base.entity';
import {BorderEntity} from './border.entity';
import {EnumCursor} from '../enums/enum-cursor';
import {PaddingEntity} from './paddingentity';
import {EnumTextAlign} from '../enums/enum-text-align';

export interface ButtonEntity {
  font: FontEntity;
  width: string;
  height: number;
  value: string;
  cursor: EnumCursor;
  padding: PaddingEntity;
  backgroundColor: string;
  border: BorderEntity;
  textAlign: EnumTextAlign;
}

export class ButtonEntity extends BaseEntity {
  constructor() {
    super();
  }
}

import {FontEntity} from './font.entity';
import {BaseEntity} from './base.entity';
import {BorderEntity} from './border.entity';

export interface ElementEntity {
  font: FontEntity;
  width: string;
  height: number;
  value: string;
  marginLeft: number;
  marginBottom: number;
  lineHeight: number;
  border: BorderEntity;
}

export class ElementEntity extends BaseEntity {
  constructor() {
    super();
  }
}

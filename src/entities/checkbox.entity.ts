import {ElementEntity} from './element.entity';
import {BaseEntity} from './base.entity';
import {Defaults} from '../helper/defaults';
import {PaddingEntity} from './paddingentity';

export interface CheckboxEntity {
  labelElement: ElementEntity;
  padding: PaddingEntity;
  backgroundColor: string;
  zoom: number;
}

export class CheckboxEntity extends BaseEntity {
  constructor() {
    super();
  }
}

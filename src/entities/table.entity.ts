import {BaseEntity} from './base.entity';

export interface TableEntity {
  rowCount: number;
  columnCount: number;
}

export class TableEntity extends BaseEntity {
  constructor() {
    super();
  }
}

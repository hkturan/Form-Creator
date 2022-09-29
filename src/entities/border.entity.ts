import {EnumBorderStyle} from '../enums/enum-border-style';

export interface BorderEntity {
  width: number;
  style: EnumBorderStyle;
  color: string;
  radius: number;
}

export class BorderEntity {
  constructor() {
  }
}

import {Enum, EnumType} from 'ts-jenum';

@Enum('text')
export class EnumBorderStyle extends EnumType<EnumBorderStyle>() {

  static readonly NONE = new EnumBorderStyle(1, 'None', 'none');
  static readonly HIDDEN = new EnumBorderStyle(2, 'Hidden', 'hidden');
  static readonly DOTTED = new EnumBorderStyle(3, 'Dotted', 'dotted');
  static readonly DASHED = new EnumBorderStyle(4, 'Dashed', 'dashed');
  static readonly SOLID = new EnumBorderStyle(5, 'Solid', 'solid');
  static readonly DOUBLE = new EnumBorderStyle(6, 'Double', 'double');
  static readonly GROOVE = new EnumBorderStyle(7, 'Groove', 'groove');
  static readonly RIDGE = new EnumBorderStyle(8, 'Ridge', 'ridge');
  static readonly INSET = new EnumBorderStyle(9, 'Inset', 'inset');
  static readonly OUTSET = new EnumBorderStyle(10, 'Outset', 'outset');
  static readonly INITIAL = new EnumBorderStyle(11, 'Initial', 'initial');
  static readonly INHERIT = new EnumBorderStyle(12, 'Inherit', 'inherit');

  private constructor(readonly code: number, readonly text: string, readonly value: string) {
    super();
  }
}

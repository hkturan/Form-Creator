import {Enum, EnumType} from 'ts-jenum';

@Enum('text')
export class EnumTextAlign extends EnumType<EnumTextAlign>() {

  static readonly CENTER = new EnumTextAlign(1, 'Center', 'center');
  static readonly LEFT = new EnumTextAlign(2, 'Left', 'left');
  static readonly RIGHT = new EnumTextAlign(3, 'Right', 'right');
  static readonly JUSTIFY = new EnumTextAlign(4, 'Justify', 'justify');

  private constructor(readonly code: number, readonly text: string, readonly value: string) {
    super();
  }
}

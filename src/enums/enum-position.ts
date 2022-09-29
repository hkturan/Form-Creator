import {Enum, EnumType} from 'ts-jenum';

@Enum('text')
export class EnumPosition extends EnumType<EnumPosition>() {

  static readonly TOP = new EnumPosition(1, 'Top', false);
  static readonly RIGHT = new EnumPosition(2, 'Right', true);
  static readonly BOTTOM = new EnumPosition(3, 'Bottom', true);
  static readonly LEFT = new EnumPosition(4, 'Left', false);

  private constructor(readonly code: number, readonly text: string, readonly isAvailableForTextbox) {
    super();
  }
}

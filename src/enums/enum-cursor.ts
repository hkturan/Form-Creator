import {Enum, EnumType} from 'ts-jenum';

@Enum('text')
export class EnumCursor extends EnumType<EnumCursor>() {

  static readonly ALIAS = new EnumCursor(1, 'Alias', 'alias');
  static readonly ALL_SCROLL = new EnumCursor(2, 'All Scroll', 'all-scroll');
  static readonly AUTO = new EnumCursor(3, 'Auto', 'auto');
  static readonly CELL = new EnumCursor(4, 'Cell', 'cell');
  static readonly CONTEXT_MENU = new EnumCursor(5, 'Context Menu', 'context-menu');
  static readonly COL_RESIZE = new EnumCursor(6, 'Col Resize', 'col-resize');
  static readonly COPY = new EnumCursor(7, 'Copy', 'copy');
  static readonly CROSSHAIR = new EnumCursor(8, 'Crosshair', 'crosshair');
  static readonly DEFAULT = new EnumCursor(9, 'Default', 'default');
  static readonly E_RESIZE = new EnumCursor(10, 'E Resize', 'e-resize');
  static readonly EW_RESIZE = new EnumCursor(11, 'Ew Resize', 'ew-resize');
  static readonly GRAB = new EnumCursor(12, 'Grab', 'grab');
  static readonly GRABBING = new EnumCursor(13, 'Grabbing', 'grabbing');
  static readonly HELP = new EnumCursor(14, 'Help', 'help');
  static readonly MOVE = new EnumCursor(15, 'Move', 'move');
  static readonly N_RESIZE = new EnumCursor(16, 'N Resize', 'n-resize');
  static readonly NE_RESIZE = new EnumCursor(17, 'Ne Resize', 'ne-resize');
  static readonly NESW_RESIZE = new EnumCursor(18, 'Nesw Resize', 'nesw-resize');
  static readonly NS_RESIZE = new EnumCursor(19, 'Ns Resize', 'ns-resize');
  static readonly NW_RESIZE = new EnumCursor(20, 'Nw Resize', 'nw-resize');
  static readonly NWSE_RESIZE = new EnumCursor(21, 'Nwse Resize', 'nwse-resize');
  static readonly NO_DROP = new EnumCursor(22, 'No Drop', 'no-drop');
  static readonly NONE = new EnumCursor(23, 'None', 'none');
  static readonly NOT_ALLOWED = new EnumCursor(24, 'Not Allowed', 'not-allowed');
  static readonly POINTER = new EnumCursor(25, 'Pointer', 'pointer');
  static readonly PROGRESS = new EnumCursor(26, 'Progress', 'progress');
  static readonly ROW_RESIZE = new EnumCursor(27, 'Row Resize', 'row-resize');
  static readonly S_RESIZE = new EnumCursor(28, 'S Resize', 's-resize');
  static readonly SE_RESIZE = new EnumCursor(29, 'Se Resize', 'se-resize');
  static readonly SW_RESIZE = new EnumCursor(30, 'Sw Resize', 'sw-resize');
  static readonly TEXT = new EnumCursor(31, 'Text', 'text');
  static readonly VERTICAL_TEXT = new EnumCursor(32, 'Vertical Text', 'vertical-text');
  static readonly W_RESIZE = new EnumCursor(33, 'W Resize', 'w-resize');
  static readonly WAIT = new EnumCursor(34, 'Wait', 'wait');
  static readonly ZOOM_IN = new EnumCursor(35, 'Zoom In', 'zoom-in');
  static readonly ZOOM_OUT = new EnumCursor(36, 'Zoom Out', 'zoom-out');
  static readonly INITIAL = new EnumCursor(37, 'Initial', 'initial');

  private constructor(readonly code: number, readonly text: string, readonly value: string) {
    super();
  }
}

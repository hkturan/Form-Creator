export interface Index {
  row: number;
  column: number;
}

export class Index {
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }
}


export interface PaginatorType {
    addColumnAndValue(): Array<string>;
}

export class TimestampPaginatorType implements PaginatorType {

    constructor(
      readonly timestamp: Date,
      readonly column: string
    ) { }

    addColumnAndValue(): Array<string> {
      return [
          `column=${this.column}`,
          `prevTimestamp=${this.timestamp.toISOString()}`
      ];
    }
}

export class Paginator {

    public static newTimestampPaginator(column: string, lastTimestamp: Date = new Date(), count: number = 24): Paginator {
      return new Paginator(
          new TimestampPaginatorType(
              lastTimestamp,
              column
          ),
          count
      );
    }

    constructor(
      readonly paginatorType: PaginatorType,
      readonly count: number = 12,
      readonly direction: string = 'desc'
    ) {}

    toQueryString(): string {
      let data = new Array<string>();
      data.push(`direction=${this.direction}`);
      data.push(`count=${this.count}`);

      data = data.concat(this.paginatorType.addColumnAndValue());

      return data.join('&');
    }
}

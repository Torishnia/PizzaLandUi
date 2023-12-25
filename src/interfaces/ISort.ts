export interface ISort {
  sortBy: string;
  sortOrder: string;
  displayText: string;
}

export interface ISortProperty extends ISort {
  onChangeSorting: Function;
}

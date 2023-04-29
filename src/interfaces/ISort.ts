export interface ISort {
  sortName: string;
  sortProperty: 'rating' | 'title' | 'price' |'-rating' | '-title' | '-price';
}

export interface ISortProps {
  value: ISort;
}
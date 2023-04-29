import { ISort } from "./ISort";

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
	sort: ISort;
}

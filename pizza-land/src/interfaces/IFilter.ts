import { ISort } from "./ISort";

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
	sort: ISort;
}

// export interface IFetchPizzasArgs {
//   baseUrl: string;
//   category: string; 
//   sortBy: string;
//   order: string;
//   search: string;
// }

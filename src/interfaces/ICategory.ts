import { E_StatusComponent } from '../enums';

export interface ICategory {
  id: number;
  title: string;
}

export interface ICategorySliceState {
  categorySelectedId: number | null;
  categories: ICategory[];
  categoryStatus: E_StatusComponent;
}

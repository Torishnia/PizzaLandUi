export interface ICategory {
  categoryValue: number;
}

export interface ICategoryProps extends ICategory {
  onChangeCategory: Function;
}

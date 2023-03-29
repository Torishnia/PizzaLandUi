import { ILoading } from "./ILoading";
import { IPizza } from "./IPizza";

export interface IProductsBlocks {
  products: IPizza[];
}


export interface IProductsProps extends IProductsBlocks, ILoading {
}
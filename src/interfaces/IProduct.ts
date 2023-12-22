import { ILoading } from "./ILoading";
import { IPizza } from "./IPizza";

export interface IProductsBlocks {
  pizzas: IPizza[];
}


export interface IProductsProps extends IProductsBlocks, ILoading {
}
import { IPizzaToCart } from "../interfaces";

export const calcTotalPrice = (items: IPizzaToCart[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}
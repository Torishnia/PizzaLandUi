export interface IPizzaPayload {
  title: string;
  price: number;
  sizes: number[];
  types: number[];
  image: string;
}

export interface IPizza extends IPizzaPayload {
  id: string;
}

export interface IPizzaToCart extends Omit<IPizza, 'sizes' | 'types'> {
  type: string;
  size: number;
}

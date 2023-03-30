export interface IPizzaPayload {
  title: string;
  price: number;
  sizes: number[];
  types: number[];
  image: string;
  count: number;
}

export interface IPizza extends IPizzaPayload {
  id: string;
}

export interface IPizzaToCart extends Omit<IPizza, 'sizes' | 'types'> {
  type: string;
  size: number;
}

export interface IPizzaSliceState {
  products: IPizza[];
  status: 'loading' | 'success' | 'error';
}
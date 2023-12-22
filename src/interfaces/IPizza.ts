export interface IPizzaPayload {
  title: string,
  description: string,
  price: number,
  image: string,
  types: IPizzaType[],
  sizes: IPizzaSize[],
  category: number,
  rating: number,
  otherImgs: IPizzaAdditionalImage[],
}

export interface IPizza extends IPizzaPayload {
  id: string;
}

export interface IPizzaType {
  id: number,
  title: string,
}

export interface IPizzaSize {
  id: number,
  title: string,
  size: number,
  coefficient: number,
}

export interface IPizzaAdditionalImage {
  id: number,
  alt: string,
  img: string,
}

// export interface IPizzaPayload {
//   title: string;
//   price: number;
//   sizes: number[];
//   types: number[];
//   image: string;
//   count: number;
// }

// export interface IPizza extends IPizzaPayload {
//   id: string;
// }

// export interface IPizzaToCart extends Omit<IPizza, 'sizes' | 'types'> {
//   type: string;
//   size: number;
// }

// export interface IPizzaSliceState {
//   products: IPizza[];
//   status: 'loading' | 'success' | 'error';
// }

// export interface ISearchPizzaParams {
//   baseUrl: string;
//   sortBy: string;
//   order: string;
//   category: string;
//   search: string;
// }

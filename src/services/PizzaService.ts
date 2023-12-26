import { IPizza } from '../interfaces';
import axios from '../utils/axios';

class PizzaService {
  async getAllPizzas(params: IPizzaParams): Promise<IPizza[]> {
    try {
      const { search, sortBy, sortOrder, categoryId } = params;
      const { status, data } = await axios.get('/pizzas', { params: { search, sortBy, sortOrder, categoryId }});
      if (status !== 200) throw new Error('Something went wrong with get all pizzas');
      return data as IPizza[];
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }
}

export interface IPizzaParams {
  categoryId: number | null;
  search: string;
  sortBy: string;
  sortOrder: string;
}

export default new PizzaService();

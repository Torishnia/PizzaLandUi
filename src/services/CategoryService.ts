import { ICategory } from '../interfaces';
import axios from '../utils/axios';

class CategoryService {
  async getAllCategories() {
    try {
      const { status, data } = await axios.get('/categories');
      if (status !== 200) throw new Error('Something went wrong with get all categories');
      return data as ICategory[];
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }
}

export default new CategoryService();

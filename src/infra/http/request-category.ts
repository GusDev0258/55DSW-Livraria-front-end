import { BASE_URL } from "../../data/config";
import axios, { AxiosResponse } from "axios";
import { CategoryModel } from "../../domain/models/category/category-model";

export const getAllCategories =  async (): Promise<CategoryModel[] | undefined> => {
  try{
    const response: AxiosResponse = await axios.get(`${BASE_URL}category/getAll`,{
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data as CategoryModel[];
  }catch(error){
    console.log(error);
  }
}
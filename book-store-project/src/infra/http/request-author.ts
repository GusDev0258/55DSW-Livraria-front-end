import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "../../data/config"
import { AuthorModel } from "../../domain/models/author/author-model";

export const getAllAuthors =  async (token): Promise<AuthorModel[] | undefined> => {
  try{
    const response: AxiosResponse = await axios.get(`${BASE_URL}author/getAll`, {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data as AuthorModel[];
  }catch(error){
    console.log(error);
  }
}
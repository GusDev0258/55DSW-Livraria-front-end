import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "../../data/config"
import { PublisherModel } from "../../domain/models/publisher/publisher-model";

export const getAllPublishers = async (): Promise<PublisherModel[]> => {
  try{
    const response: AxiosResponse = await axios.get(`${BASE_URL}publisher/getAll`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data as PublisherModel[];
  }catch(error){
    throw new Error("Error getting publishers")
  }
}
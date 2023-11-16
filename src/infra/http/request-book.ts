import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../data/config";
import { BookModelResponse, BookModelRequest } from "../../domain/models/book/book-model";

export const getAllBooks = async (): Promise<BookModelResponse[]> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/getAll`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    return response.data as BookModelResponse[];
  } catch (error) {
    throw new Error("failed to get All books")
  }
};

export const getBookById = async (id: string | undefined): Promise<BookModelResponse> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data as BookModelResponse;
  } catch (error) {
    throw new Error("failed to get book");
  }
};

export const getAllBooksByCategory = async (categoryId: string | undefined): Promise<BookModelResponse[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/category/${categoryId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data as BookModelResponse[];
  } catch (error) {
    console.error(error);
  }
};

export const registerBook =  async (token, bookData: BookModelRequest) => {
  try{
    const response = await fetch(`${BASE_URL}book/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(bookData),
    });
    return await response.json();
  }catch(error){
    console.log(error);
    throw new Error("failed to register book");
  }
}

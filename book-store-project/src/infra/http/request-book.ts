import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../data/config";
import { BookModel } from "../../domain/models/book/book-model";

export const getAllBooks = async (): Promise<BookModel[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/getAll`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data as BookModel[];
  } catch (error) {
    console.error(error);
  }
};

export const getBookById = async (id: string | undefined): Promise<BookModel | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data as BookModel;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBooksByCategory = async (categoryId: string | undefined): Promise<BookModel[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}book/category/${categoryId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data as BookModel[];
  } catch (error) {
    console.error(error);
  }
};


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

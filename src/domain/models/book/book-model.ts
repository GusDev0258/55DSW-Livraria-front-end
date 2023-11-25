import { AuthorModel } from "../author/author-model";
import { CategoryModel } from "../category/category-model";
import { PublisherModel } from "../publisher/publisher-model";

export type BookModelResponse = {
  id: number;
  name: string;
  language: string;
  pagesNumber: number;
  isbn: string;
  price: number;
  releaseDate: string;
  version: string;
  description: string;
  cover: string;
  publisher: PublisherModel;
  author: AuthorModel[];
  category: CategoryModel[];
}
export type BookModelRequest = {
  name: string;
  language: string;
  pagesNumber: number;
  isbn: string;
  price: number;
  releaseDate: string;
  version: string;
  description: string;
  cover: string;
  publisher: number;
  authors: number[];
  categories: number[];
}

export type AlterBookModel = {
  name: string;
  language: string;
  pagesNumber: number;
  isbn: string;
  price: number;
  releaseDate: string;
  version: string;
  description: string;
  cover: string;
  publisher: PublisherModel;
  authors: AuthorModel[];
  categories: CategoryModel[];
}

export interface BookUpdateDTO {
  name?: string;
  language?: string;
  pagesNumber?: number;
  isbn?: string;
  price?: number;
  releaseDate?: string;
  version?: string;
  description?: string;
  cover?: string;
  publisher?: PublisherModel;
  authors?: AuthorModel[];
  categories?: CategoryModel[];
}
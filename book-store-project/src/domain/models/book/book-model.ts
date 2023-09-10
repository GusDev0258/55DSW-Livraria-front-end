import { AuthorModel } from "../author/author-model";
import { CategoryModel } from "../category/category-model";
import { PublisherModel } from "../publisher/publisher-model";

export type BookModel = {
  id: number;
  name: string;
  language: string;
  pagesNumber: number;
  isbn: string;
  price: number;
  releaseDate: Date;
  version: number;
  description: string;
  cover: string;
  publisher: PublisherModel;
  author: AuthorModel[];
  category: CategoryModel[];
}
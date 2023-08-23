import { BookModel, PublisherModel, SubCategoryModel, VersionEnum, AuthorModel } from "../models/";

export interface AddBook {
  add: (params: AddBook.Params) => Promise<AddBook.Model>
}

export namespace AddBook {
  export type Params = {
    title: string
    publisher: PublisherModel
    idiom: string
    numOfPages: number
    isbn: string
    country: string
    category: SubCategoryModel
    price: number
    year: Date
    version: VersionEnum
    authors: AuthorModel[]
  }

  export type Model = BookModel | null | undefined
}
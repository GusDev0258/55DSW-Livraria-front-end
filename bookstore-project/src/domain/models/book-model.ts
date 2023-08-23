import { AuthorModel } from "./author-model"
import { PublisherModel } from "./publisher-model"
import { SubCategoryModel } from "./sub-category-model"
import { VersionEnum } from "./version-model"

export type BookModel = {
    id: number
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

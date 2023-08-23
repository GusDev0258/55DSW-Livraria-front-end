import { CategoryModel } from "./category-model"

export type SubCategoryModel = {
    id: number
    name: string
    category: CategoryModel
}
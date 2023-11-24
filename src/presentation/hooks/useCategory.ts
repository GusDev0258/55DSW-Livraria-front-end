import { useEffect, useState } from "react";
import { CategoryModel } from "../../domain/models/category/category-model";
import { getAllCategories } from "../../infra/http/request-category";


export const useCategory = () => {
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);

  useEffect(() => {
    getAllCategories().then((categories) => {
      if(categories) {
        setCategoryList(categories);
      }
    }).catch((error) => {
      console.error("Erro ao buscar categorias", error);
    });
  },[]);
  return { categoryList}
}
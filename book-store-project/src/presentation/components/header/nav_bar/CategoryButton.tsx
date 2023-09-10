import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { CategoryModel } from "../../../../domain/models/category/category-model";
import { useCategory } from "../../../hooks/useCategory";
import { Link } from "react-router-dom";

export type Props = {
  categoryList: CategoryModel[];
};

export const CategoryButton = (props: Props) => {
  const [isListVisible, setIsListVisible] = useState(false);

  function handleListVisibility() {
    setIsListVisible(!isListVisible);
  }

  return (
    <section className="flex items-center justify-center relative">
      <button
        type="button"
        className="px-4 py-2 bg-emerald-600 text-zinc-200 font-bold rounded-md flex items-center justify-center gap-2 hover:bg-emerald-800 hover:text-zinc-100"
        onClick={handleListVisibility}
      >
        {isListVisible ? <LuChevronUp size="16px" /> : <LuChevronDown size="16px" /> }
        Categorias
      </button>
      {isListVisible && props.categoryList.length > 0 && (
        <div
          className="category-nav absolute w-96 top-9 left-0 z-10 flex-1 flex"
          onMouseLeave={handleListVisibility}
        >
          <ul
            className="top-7 w-auto h-auto flex flex-wrap flex-1
         bg-zinc-50 text-zinc-600 text-base items-center justify-start gap-2 border-2 border-emerald-600 border-solid rounded-md p-4"
          >
            {props.categoryList.map((category) => (
              <li
                key={category.id}
                className="p-2 h-auto hover:bg-emerald-600 hover:text-zinc-100 text-sm cursor-pointer rounded text-center md:text-xs"
              >
                <Link to={`/book/category/${category.id}`}>
                  {category.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

import { ComponentProps, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useAllBooks } from "../../../hooks/useBook";
import { BookModel } from "../../../../domain/models/book/book-model";
import { Link } from "react-router-dom";

type Props = ComponentProps<"input">;

export const SearchBar = (props: Props) => {
  const { books } = useAllBooks();
  const [bookSearchList, setBookSearchList] = useState<BookModel[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (books) {
      setBookSearchList(
        books.filter((book) =>
          book.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };
  const handleSearchListShow = () => {
    document.querySelector(".search-list")?.classList.toggle("hidden");
  };
  return (
    <div className="flex items-center relative w-96">
      <input
        className="h-10 w-full bg-zinc-100 text-zinc-300 text-base rounded-t-md p-4 px-4 placeholder:text-zinc-400 placeholder:px-1 outline-none focus:border-2 focus:border-emerald-400"
        {...props}
        onChange={handleSearch}
        onClick={handleSearchListShow}
      />
      {bookSearchList.length > 0 && (
        <div
          className="search-list absolute z-10 top-10 w-full bg-zinc-100 text-zinc-800 text-base rounded-t-none rounded-b-md p-4 placeholder:text-zinc-400 placeholder:px-1 outline-none focus:border-2 focus:border-emerald-400 max-h-72 overflow-y-scroll border-emerald-400 border-2 border-solid"
          onMouseLeave={handleSearchListShow}
        >
          <ul className="flex flex-col flex-1 gap-2 ">
            {bookSearchList.map((book) => (
              <li
                key={book.id}
              >
                <Link className="hover:bg-emerald-500 hover:text-zinc-100 p-4 rounded-sm cursor-pointer text-sm" to={`/book/${book.id}`}>{book.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <LuSearch className="absolute right-4 text-zinc-400" size="16px" />
    </div>
  );
};
export default SearchBar;

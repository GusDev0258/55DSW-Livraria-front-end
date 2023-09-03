import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import { BookModel } from "../../../domain/models/book/book-model";
import { getAllBooks } from "../../../infra/http/request-book";
import { Book } from "./Book";
import { useNavigate } from "react-router-dom";

export interface BookShelfProps {
  books: BookModel[];
}

export const BookShelf = (props: BookShelfProps) => {
  const [bookList, setBookList] = useState<BookModel[] | []>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBookList(props.books);
  })
  const handleNavigation = (id: number) => () => {
    navigate(`/book/${id}`);
  };

  return (
    <>
      <h1 className="text-3xl text-gray-950 font-bold m-4 text-center">
        Nossa coleção de livros
      </h1>
      <div className="w-full m-0 h-auto flex items-center justify-center">
        <ul className="grid grid-cols-5 gap-4 items-center justify-center mt-6">
          {bookList &&
            bookList.map((book: BookModel) => (
              <li key={book.id} onClick={handleNavigation(book.id)}>
                {" "}
                <Book
                  name={book.name}
                  cover={book.cover}
                  author={book.author}
                  price={book.price}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { BookModelResponse } from "../../../domain/models/book/book-model";
import { Book } from "./Book";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface BookShelfProps {
  books: BookModelResponse[];
}

export const BookShelf = (props: BookShelfProps) => {
  const [bookList, setBookList] = useState<BookModelResponse[] | []>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBookList(props.books);
  },[props.books]);
  const handleNavigation = (id?: number) => () => {
    navigate(`/book/${id}`);
  };

  return (
    <section className="container">
      {bookList.length > 0 ? (
        <div>
          <h1 className="text-2xl text-gray-950 font-bold m-4 text-center font-sans italic">
            Escolha sua próxima aventura
          </h1>
          <ul className="flex flex-1 flex-wrap gap-4 items-center justify-center mt-6">
            {bookList &&
              bookList.map((book: BookModelResponse) => (
                <li key={book.id} onClick={handleNavigation(book.id)}>
                  {" "}
                  <Book
                    name={book.name}
                    cover={book.cover}
                    author={book.author}
                    price={book.price}
                    category={book.category}
                    description={book.description}
                    isbn={book.isbn}
                    pagesNumber={book.pagesNumber}
                    language={book.language}
                    publisher={book.publisher}
                    releaseDate={book.releaseDate}
                    version={book.version}
                  />
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-gray-950 font-bold m-4 text-center">
            Nossa coleção de livros
          </h1>
          <div className="w-full m-0 h-auto flex items-center justify-center">
            <ul className="grid grid-cols-5 gap-8 items-center justify-center mt-6">
              {[...Array(10)].map((_, index) => (
                <li className="flex flex-col gap-1" key={index}>
                  <Skeleton width={188} height={256} className="" />
                  <Skeleton width={140} height={20} className="" />
                  <Skeleton width={80} height={10} className="" />
                  <Skeleton width={60} height={10} className="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

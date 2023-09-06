import { useEffect, useState } from "react";
import { BookModel } from "../../../domain/models/book/book-model";
import { Book } from "./Book";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface BookShelfProps {
  books: BookModel[];
}

export const BookShelf = (props: BookShelfProps) => {
  const [bookList, setBookList] = useState<BookModel[] | []>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBookList(props.books);
  });
  const handleNavigation = (id: number) => () => {
    navigate(`/book/${id}`);
  };

  return (
    <>
      {bookList.length > 0 ? (
        <div>
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
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-gray-950 font-bold m-4 text-center">
            Nossa coleção de livros
          </h1>
          <div className="w-full m-0 h-auto flex items-center justify-center">
            <ul className="grid grid-cols-5 gap-8 items-center justify-center mt-6">
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
              <li className="flex flex-col gap-1">
                <Skeleton width={188} height={256} className="" />
                <Skeleton width={140} height={20} className="" />
                <Skeleton width={80} height={10} className="" />
                <Skeleton width={60} height={10} className="" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

import { FC, ReactElement, ReactNode, useEffect, useState } from "react"
import { BookModel } from '../../../domain/models/book/book-model';
import { getAllBooks } from "../../../infra/http/request-book";
import { Book } from './Book';

export interface BookShelfProps {}

export const BookShelf = () => {
  const [bookList, setBookList] = useState<BookModel[] | []>([]);

  useEffect(() =>{
    getAllBooks().then((books) => {
        if(books){
          setBookList(books);
          console.log(books);
        }
      }).catch((error) => {
      console.error("Erro ao buscar livros", error);
    });
  }, [])

  return(
    <div className="w-full m-0 h-auto flex items-center justify-center">
      <ul className="grid grid-cols-5 gap-4 items-center justify-center mt-4">
        {bookList && bookList.map((book: BookModel) => (
          <li key={book.id}> <Book name={book.name} cover={book.cover} author={book.author} price={book.price}/></li>
        ))}
        </ul>

    </div>
  )
}
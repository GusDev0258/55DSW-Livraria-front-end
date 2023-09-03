import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBooksByCategory } from "../../../infra/http/request-book";
import { BookModel } from "../../../domain/models/book/book-model";
import { BookShelf } from "../../components/book/BookShelf";

export interface BookCategoryProps{

}

export const BookCategory = () => {
  const categoryId = useParams().id;

  const [bookList, setBookList] = useState<BookModel[] | []>([]);

  useEffect(() => {
    console.log(categoryId);
    getAllBooksByCategory(categoryId).then((books) => {
      if (books) {
        setBookList(books);
        console.log(books);
      }
    });
  },[categoryId]);

  return (
    <>
      {bookList ? (
        <BookShelf  books={bookList ? bookList : []}/>
      ): (
        <h1 className="text-gray-950">Não há livros nessa categoria</h1>
      )}
    </>
  )
}

export default BookCategory;

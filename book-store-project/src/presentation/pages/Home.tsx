import * as React from "react";
import Banner from "../../assets/banner1.png";
import { BookShelf } from "../components/book/BookShelf";
import { BookModel } from "../../domain/models/book/book-model";
import { useAllBooks } from "../hooks/useBook";

export interface HomeProps {}


export const Home = () => {
  const [bookList, setBookList] = React.useState<BookModel[] | []>([]);
  const {books} = useAllBooks();

  React.useEffect(() => {
    if(books){
      setBookList(books)
    }
  },[books])
  return (
    <>
      <img className="w-full h-96 object-cover" src={Banner}></img>
      {bookList && <BookShelf books={bookList} />}
      <h1 className="text-gray-950">React TS Home</h1>
    </>
  );
};

export default Home;

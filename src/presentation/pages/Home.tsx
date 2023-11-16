import * as React from "react";
import Banner from "../../assets/banner1.png";
import { BookShelf } from "../components/book/BookShelf";
import { BookModelResponse } from "../../domain/models/book/book-model";
import { useAllBooks } from "../hooks/useBook";
import Header from "../components/header/Header";

export interface HomeProps {}

export const Home = () => {
  const [bookList, setBookList] = React.useState<BookModelResponse[] | []>([]);
  const { books } = useAllBooks();

  React.useEffect(() => {
    if (books) {
      setBookList(books);
    }
  }, [books]);
  return (
    <>
      <Header />
      <main className="container flex flex-col justify-center items-start bg-zinc-50">
      <img className="w-full h-72 object-cover" src={Banner}></img>
      {bookList && <BookShelf books={bookList} />}
      </main>
    </>
  );
};

export default Home;

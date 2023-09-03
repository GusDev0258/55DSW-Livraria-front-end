import * as React from "react";
import Banner from "../../assets/banner1.png";
import { BookShelf } from "../components/book/BookShelf";
import { getAllBooks } from "../../infra/http/request-book";
import { BookModel } from "../../domain/models/book/book-model";

export interface HomeProps {}


export const Home = () => {
  const [bookList, setBookList] = React.useState<BookModel[] | []>([]);

  React.useEffect(() => {
    getAllBooks()
      .then((books) => {
        if (books) {
          setBookList(books);
          console.log(books);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar livros", error);
      });
  },[])
  return (
    <>
      <img className="w-full h-96 object-cover" src={Banner}></img>
      {bookList && <BookShelf books={bookList} />}
      <h1 className="text-gray-950">React TS Home</h1>
    </>
  );
};

export default Home;

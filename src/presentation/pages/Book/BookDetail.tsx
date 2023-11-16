import React, { useEffect } from "react";
import { deleteBook, getBookById } from "../../../infra/http/request-book";
import { Link, useParams } from "react-router-dom";
import { BookModelResponse } from "../../../domain/models/book/book-model";
import { LuArrowRight } from "react-icons/lu";
import Skeleton from 'react-loading-skeleton';
import Header from "../../components/header/Header";
import { useUserDetails } from '../../context/userContext';
import { useToken } from "../../hooks/useToken";

export const BookDetail = () => {
  const [book, setBook] = React.useState<BookModelResponse | null>(null);
  const bookId = useParams().id;
  const {userDetails} = useUserDetails();
  const {token} = useToken();

  useEffect(() => {
    getBookById(bookId).then((book) => {
      if (book) {
        setBook(book);
        console.log(book);
      }
    });
  }, [bookId]);

  const handleDelete = async (token: string | null, bookId: number) => {
    await deleteBook(token, bookId);
  }

  return (
    <>
    <Header />
      {book ? (
        <section className="mt-4 w-full flex justify-center flex-col">
          <header className="w-full h-32 bg-gray-100 flex items-center justify-around rounded">
            <h1 className="text-4xl text-zinc-800 ml-3">Detalhes do livro</h1>
            <div className="flex gap-2 items-center text-emerald-700 h-10 justify-center">
              <Link to={"/"} className="text-gray-300">Home</Link>{" "}
              <p>
                <LuArrowRight />
              </p>{" "}
              <p>Livros</p>{" "}
              <p>
                <LuArrowRight />
              </p>{" "}
              <p>{book.name} </p>
            </div>
          </header>
          <section className=" self-center book-details mt-10 w-[1200px] h-auto flex gap-6 items-center justify-center">
            <section className="w-96 h-[32rem] flex items-center justify-center border-2 border-solid bg-zinc-100 shadow-md p-2 rounded">
              <img className="object-fill w-full h-full" src={book.cover} />
            </section>
            <section className="border-solid border-2 border-zinc-200 rounded-lg p-4 h-[32rem] w-[32rem] flex flex-col gap-2 items-start justify-start">
              <section className="border-b-2 border-solid border-zinc-100 w-full">
                <span className="bg-emerald-200 text-emerald-500 text-sm font-bold p-2 rounded-md">
                  Disponível
                </span>
                {
                  userDetails?.role === 'ROLE_ADMIN' && (
                    <button className="bg-rose-600 text-zinc-50 text-sm rounded-md font-bold p-2 ml-2" onClick={ () => handleDelete(token, book.id)}>
                      Excluir
                    </button>
                  )
                }
                <h2 className="text-2xl text-zinc-600 mt-2">{book.name}</h2>
                <p className="text-zinc-400 text-sm mb-2">
                  Escrito por: {book.author.map((author) => author.name)}
                </p>
              </section>
              <section className="flex flex-col gap-4 mt-2 border-b-2 border-solid border-zinc-100 w-full">
                <p className="text-lg text-emerald-600 font-bold">
                  R${book.price}
                </p>
                <p className="text-sm text-zinc-400">{book.description}</p>
                <p className="text-zinc-300 text-sm mb-4">Formato: <span className="text-zinc-700 font-bold">{book.version}</span></p>
              </section>
              <section>
                <span className="text-zinc-600 text-xs">Quantidade</span>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section className="mt-4 w-full flex justify-center flex-col">
        <header className="w-full h-32 bg-gray-100 flex items-center justify-around rounded">
          <h1 className="text-4xl text-zinc-800 ml-3">Detalhes do livro</h1>
          <div className="flex gap-2 items-center text-emerald-700 h-10 justify-center">
            <Link to={"/"} className="text-gray-300">Home</Link>{" "}
            <p>
              <LuArrowRight />
            </p>{" "}
            <p>Livros</p>{" "}
            <p>
              <LuArrowRight />
            </p>{" "}
            <p><Skeleton width={80} height={20}/> </p>
          </div>
        </header>
        <section className=" self-center book-details mt-10 w-[1200px] h-auto flex gap-6 items-center justify-center">
          <section className="w-96 h-[32rem] flex items-center justify-center border-2 border-solid bg-zinc-100 shadow-md p-2 rounded">
              <Skeleton className="w-full h-full"/>
          </section>
          <section className="border-solid border-2 border-zinc-200 rounded-lg p-4 h-[32rem] w-[32rem] flex flex-col gap-2 items-start justify-start">
            <section className="border-b-2 border-solid border-zinc-100 w-full">
              <span className="text-sm font-bold p-2 rounded-md">
                <Skeleton className="w-full h-full"/>
              </span>
              <h2 className="text-2xl text-zinc-600 mt-2"><Skeleton className="w-full h-full"/></h2>
              <p className="text-zinc-400 text-sm mb-2">
              <Skeleton className="w-full h-full"/>
              </p>
            </section>
            <section className="flex flex-col gap-4 mt-2 border-b-2 border-solid border-zinc-100 w-full">
              <p className="text-lg text-emerald-600 font-bold">
              <Skeleton className="w-full h-full"/>
              </p>
              <p className="text-sm text-zinc-400"><Skeleton className="w-full h-full"/></p>
              <p className="text-zinc-300 text-sm mb-4">Formato: <span className="text-zinc-700 font-bold"><Skeleton className="w-full h-full"/></span></p>
            </section>
            <section>
              <span className="text-zinc-600 text-xs"><Skeleton className="w-full h-full"/></span>
            </section>
          </section>
        </section>
      </section>
      )}
    </>
  );
};

export default BookDetail;

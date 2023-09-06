import { useEffect, useState } from 'react';
import { BookModel } from '../../domain/models/book/book-model';
import { getAllBooks } from '../../infra/http/request-book';

export const useAllBooks = () =>{
  const [books, setBooks] = useState<BookModel[]>([]);

  useEffect(() =>{
      getAllBooks()
      .then((books) => {
        if (books) {
          setBooks(books);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar livros", error);
      });
  },[])

  return { books};
}
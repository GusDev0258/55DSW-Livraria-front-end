import { useEffect, useState } from "react";
import { getAllAuthors } from "../../infra/http/request-author";
import { AuthorModel } from "../../domain/models/author/author-model";

export const useAuthor = () => {
  const [authorList, setAuthorList] =  useState<AuthorModel[]>([]);

  useEffect(() => {
      handleAuthorRequest();
  },[])

  const handleAuthorRequest = async () => {
    const authors = await getAllAuthors()
    if(authors) {
      setAuthorList(authors);
    }
  }
  return {authorList}
}
import { useEffect, useState } from "react";
import { useToken } from "./useToken"
import { getAllAuthors } from "../../infra/http/request-author";
import { AuthorModel } from "../../domain/models/author/author-model";

export const useAuthor = () => {
  const {token} =  useToken();
  const [authorList, setAuthorList] =  useState<AuthorModel[]>([]);

  useEffect(() => {
    if(token) {
      handleAuthorRequest();
    }
  },[token])

  const handleAuthorRequest = async () => {
    const authors = await getAllAuthors(token)
    if(authors) {
      setAuthorList(authors);
    }
  }
  return {authorList}
}
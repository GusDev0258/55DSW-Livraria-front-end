import { FormEvent, useEffect, useState } from "react";
import { DefaultInput } from "../../components/form/DefaultInput";
import DefaultRadioButton from "../../components/form/DefaultRadio";
import { DefaultTextArea } from "../../components/form/DefaultTextArea";
import Header from "../../components/header/Header";
import ChoiceInput from "../../components/form/ChoiceInput";
import { useCategory } from "../../hooks/useCategory";
import { useAuthor } from "../../hooks/useAuthor";
import { useUserDetails } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { AuthorModel } from "../../../domain/models/author/author-model";
import { CategoryModel } from "../../../domain/models/category/category-model";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import moment from "moment";

import "../../styles/animations/register-form-animation.css";
import { PublisherModel } from "../../../domain/models/publisher/publisher-model";
import usePubliser from "../../hooks/usePubliser";
import { useToken } from "../../hooks/useToken";
import { registerBook } from "../../../infra/http/request-book";

export const BookRegister = () => {
  const [version, setVersion] = useState("DIGITAL");
  const [cover, setCover] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [pagesNumber, setPagesNumber] = useState("");
  const [isbn, setIsbn] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { categoryList } = useCategory();
  const { authorList } = useAuthor();
  const { publisherList } = usePubliser();
  const [selectedCategories, setSelectedCategories] = useState<CategoryModel[]>(
    []
  );
  const [selectedAuthors, setSelectedAuthors] = useState<AuthorModel[]>([]);
  const { userDetails } = useUserDetails();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPublisher, setSelectedPublisher] = useState<PublisherModel[]>();
  const { token } = useToken();

  useEffect(() => {
    userDetails?.role != "ROLE_ADMIN" ? navigate("/") : "";
  },[]);

  const handleVersionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVersion(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      const authorIds = selectedAuthors.map((author) => author.id);
      const categoryIds = selectedCategories.map((category) => category.id);
      const publisherId = selectedPublisher?.map((publisher) => publisher.id);
      const pId = publisherId![0];
      const dateReleased = moment.utc(releaseDate).format("DD/MM/YYYY");
      const bookData = {
        name,
        language,
        pagesNumber: +pagesNumber,
        isbn,
        price: +price,
        releaseDate: dateReleased,
        version,
        description,
        cover,
        publisher: pId,
        authors: authorIds,
        categories: categoryIds,
      };
      if(bookData){
        registerBook(token, bookData).then((response) => console.log(response));
      }
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <Header />
      <main className="flex items-start justify-start gap-8 p-4 container">
        <section className="w-1/2 flex items-center justify-center">
          {cover != "" && (
            <div className="mt-6">
            </div>
          )}
        </section>
        <section className=" flex flex-col h-full items-start p-6 justify-center">
          <div className="flex flex-col mb-2">
            <h1 className="text-3xl text-zinc-900">Detalhes do livro</h1>
            <p className="text-sm text-zinc-600">
              Registre livros no sistema LGC Bookstore.
            </p>
            <div className="flex items-center">
              <span
                className={`text-lg bg-emerald-500 py-2 px-4 rounded-full border-solid border-2 border-emerald-700 transition-all`}
              >
                1
              </span>
              {currentPage >= 1 && (
                <span className="w-8 h-1 bg-emerald-500 decor-line"></span>
              )}
              <span
                className={`text-lg ${
                  currentPage >= 1
                    ? "bg-emerald-500 text-zinc-100 ml-0"
                    : "bg-transparent text-zinc-600 ml-4"
                }  py-2 px-4 rounded-full border-solid border-2 border-emerald-700 transition-all`}
              >
                2
              </span>
              {currentPage == 2 && (
                <span className="w-8 h-1 bg-emerald-500 decor-line"></span>
              )}
              <span
                className={`text-lg ${
                  currentPage >= 2
                    ? "bg-emerald-500 text-zinc-100 ml-0"
                    : "bg-transparent text-zinc-600 ml-4"
                }  p-2 px-4 rounded-full border-solid border-2 border-emerald-700 transition-all`}
              >
                3
              </span>
            </div>
          </div>
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            {currentPage == 0 && (
              <>
                <DefaultInput
                  type="text"
                  label="Título do livro"
                  id="name"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                  }
                  value={name}
                />
                <DefaultInput
                  type="text"
                  label="Imagem de capa"
                  id="cover"
                  placeholder="URL da imagem"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setCover(event.target.value)
                  }
                  value={cover}
                />
                <div className="flex items-center gap-4">
                  <DefaultInput
                    type="text"
                    label="Idioma"
                    id="language"
                    size="w-48"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setLanguage(event.target.value)
                    }
                    value={language}
                  />
                  <DefaultInput
                    type="number"
                    label="Nº páginas"
                    id="pagesNumber"
                    size="w-20"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPagesNumber(event.target.value)
                    }
                    value={pagesNumber}
                  />
                </div>
                <button
                  className="text-zinc-600 bg-emerald-500 rounded-xl p-2 flex items-center justify-center gap-2"
                  onClick={handleNextPage}
                  type="button"
                >
                  Continuar <LuArrowRight size="20" />
                </button>
              </>
            )}
            {currentPage == 1 && (
              <>
                <DefaultInput
                  type="text"
                  label="ISBN-13"
                  id="isbn"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setIsbn(event.target.value)
                  }
                  value={isbn}
                />
                <div className="flex items-center gap-4">
                  <DefaultInput
                    type="date"
                    label="Data de publicação"
                    id="releaseDate"
                    size="w-48"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setReleaseDate(event.target.value)
                    }
                    value={releaseDate}
                  />
                  <DefaultInput
                    type="text"
                    label="Preço"
                    id="price"
                    size="w-20"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPrice(event.target.value)
                    }
                    value={price}
                  />
                </div>
                <DefaultTextArea
                  label="Descrição"
                  id="description"
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setDescription(event.target.value)
                  }
                  value={description}
                />
                <fieldset className="border-emerald-500 flex gap-4">
                  <legend className="text-sm text-emerald-800 font-sans font-bold">
                    Versão
                  </legend>
                  <DefaultRadioButton
                    id="DIGITAL"
                    label="DIGITAL"
                    name="version"
                    checked={version === "DIGITAL"}
                    onChange={handleVersionChange}
                    value="DIGITAL"
                  />
                  <DefaultRadioButton
                    id="FISICO"
                    label="FISICO"
                    name="version"
                    checked={version === "FISICO"}
                    onChange={handleVersionChange}
                    value="FISICO"
                  />
                </fieldset>
                <div className="flex items-center justify-center w-full flex-wrap gap-6">
                  <button
                    className="text-zinc-600 bg-emerald-500 rounded-xl p-2 flex flex-1 items-center justify-center gap-2"
                    onClick={handlePreviousPage}
                    type="button"
                  >
                    <LuArrowLeft size="20" /> Voltar
                  </button>
                  <button
                    className="text-zinc-600 bg-emerald-500 rounded-xl p-2 flex flex-1 items-center justify-center gap-2"
                    onClick={handleNextPage}
                    type="button"
                  >
                    Continuar <LuArrowRight size="20" />
                  </button>
                </div>
              </>
            )}
            {currentPage == 2 && (
              <>
                <ChoiceInput
                  label="Categorias"
                  id="category"
                  itemList={categoryList.map((category) => ({
                    name: category.name,
                    id: category.id,
                  }))}
                  onChangeItems={(items) => {
                    setSelectedCategories(items);
                  }}
                  multiple={true}
                />
                <ChoiceInput
                  label="Autores"
                  id="author"
                  itemList={authorList.map((author) => ({
                    name: author.name,
                    id: author.id,
                  }))}
                  onChangeItems={(items) => {
                    setSelectedAuthors(items);
                  }}
                  multiple={true}
                />
                <ChoiceInput
                  label="Editora"
                  id="publisher"
                  itemList={publisherList.map((publisher) => ({
                    name: publisher.name,
                    id: publisher.id,
                  }))}
                  onChangeItems={(items) => {
                    setSelectedPublisher(items);
                  }}
                  multiple={false}
                />
                <div className="flex items-center justify-center w-full flex-wrap gap-6">
                  <button
                    className="text-zinc-600 bg-emerald-500 rounded-xl p-2 flex flex-1 items-center justify-center gap-2"
                    type="button"
                    onClick={handlePreviousPage}
                  >
                    <LuArrowLeft size="20" /> Voltar
                  </button>
                  <button
                    className="text-zinc-600 bg-emerald-500 rounded-xl p-2 flex flex-1 items-center justify-center gap-2" type="submit"
                  >
                    Cadastrar
                  </button>
                </div>
              </>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};
export default BookRegister;

import { useState } from "react";
import { DefaultInput } from "../../components/form/DefaultInput";
import DefaultRadioButton from "../../components/form/DefaultRadio";
import { DefaultTextArea } from "../../components/form/DefaultTextArea";
import Header from "../../components/header/Header";

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

  const handleVersionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVersion(event.target.value);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <main className="flex items-center justify-center gap-8 p-4 container">
        <section className=" flex flex-col h-full items-start p-6 justify-center">
          <div className="flex flex-col mb-2">
            <h1 className="text-3xl text-zinc-900">Detalhes do livro</h1>
            <p className="text-sm text-zinc-600">
              Registre livros no sistema LGC Bookstore.
            </p>
          </div>
          <form className="flex flex-col gap-6 w-full">
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
            <button className="text-zinc-600">Cadastrar</button>
          </form>
        </section>
        <section className="flex items-center justify-center border-2 border-solid bg-zinc-100 shadow-md p-2 rounded">
              <img className="object-fill w-full h-full" src={cover} />
            </section>
      </main>
    </div>
  );
};
export default BookRegister;

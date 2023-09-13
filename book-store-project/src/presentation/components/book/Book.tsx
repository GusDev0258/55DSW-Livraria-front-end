import { BookModelResponse } from "../../../domain/models/book/book-model";

export const Book = (props: BookModelResponse) => {
  return (
    <div className="h-96 w-56 hover:scale-110 hover:cursor-pointer flex flex-col justify-start items-center">
      <section className="w-52 h-72 flex items-center justify-center border-2 border-solid bg-zinc-100 shadow-md p-2 rounded">
        <img className="object-fill w-full h-64" src={props.cover}></img>
      </section>
      <section className="flex flex-col items-start justify-start self-start p-2">
        <h1 className="text-zinc-900 font-bold text-sm mt-1 flex-wrap flex flex-1 max-w-[16ch]">{props.name}</h1>
        <div className="text-zinc-700 text-xs flex gap-1 items-center flex-wrap flex-1">
          Por: {props.author && props.author.map((author) => <span key={author.id}>{author.name}</span>)}
        </div>
        <div className="flex items-center justify-start gap-1">
          <span className="text-xs text-zinc-600">R${props.price}</span>
          <span className="text-xs text-zinc-500">
            De:{" "}
            <span className="line-through">
              R${(props.price + 37).toFixed(2)}
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

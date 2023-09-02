import { BookModel } from "../../../domain/models/book/book-model";


export const Book = (props: BookModel) => {
  return (
    <>
      <div className="h-96 hover:scale-110 hover:cursor-pointer flex flex-col justify-center items-center w-56">
       <section className="w-52 h-72 flex items-center justify-center border-2 border-solid bg-zinc-100 shadow-md p-2 rounded">
        <img className="object-fill w-full h-64" src={props.cover}></img>
       </section>
       <section className="flex flex-col items-start justify-start self-start ml-2">
        <h1 className="text-zinc-900 font-bold text-base leading-5 mt-1">{props.name}</h1>
        <span className="text-zinc-700 text-xs">Por {props.author && (props.author.map((author) => author.name))}</span>
        <div className="flex items-center justify-start gap-1">
          <span className="text-xs text-zinc-600">R${props.price}</span>
          <span className="text-xs text-zinc-500">De: <span className="line-through">R${(props.price + 10).toFixed(2)}</span></span>
        </div>
       </section>
      </div>
    </>
  )
}
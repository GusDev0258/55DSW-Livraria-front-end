import { HTMLProps } from "react";

export type Props = {
  label: string;
  placeholder?: string;
  id: string;
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const DefaultTextArea = (props: Props | HTMLProps<HTMLTextAreaElement>) => {
  return (
    <div className={`flex flex-1 flex-col items-start justify-center gap-1 ${props.size ? props.size : "w-72"}`}>
      <label htmlFor={props.id} className="text-sm text-emerald-800 font-sans font-bold">
        {props.label}
      </label>
      <textarea
        className="w-full p-4 bg-transparent text-sm text-zinc-800 focus:outline-none border-2 border-solid border-emerald-500 rounded-md focus:shadow-sm focus:shadow-emerald-400 resize-none"
        id={props.id}
        placeholder={props.placeholder}
        rows={3}
        cols={20}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default DefaultTextArea;
import { HTMLProps } from "react";


export type Props = {
  label: string;
  placeholder?: string;
  id: string;
  type: string;
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DefaultInput = (props: Props | HTMLProps<HTMLInputElement>) => {
  return (
    <div className={`flex flex-1 flex-col items-start justify-center gap-1 ${props.size ? props.size : "w-96"}`}>
      <label htmlFor={props.id} className="text-base text-emerald-800 font-sans font-bold">
        {props.label}
      </label>
      <input
        className="w-full h-10 p-4 bg-transparent text-lg text-zinc-800 focus:outline-none border-2 border-solid border-emerald-500 rounded-md focus:shadow-sm focus:shadow-emerald-400"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default DefaultInput;
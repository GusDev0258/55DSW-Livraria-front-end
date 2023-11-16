import { HTMLProps } from "react";

export type Props = {
  label: string;
  id: string;
  name: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DefaultRadioButton = (props: Props | HTMLProps<HTMLInputElement>) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        checked={props.checked}
        className="sr-only"
        onChange={props.onChange}
        value={props.value}
      />
      <label
        htmlFor={props.id}
        className={`p-2 border-2 border-emerald-500 border-solid rounded-md hover:bg-emerald-600 hover:text-zinc-100 cursor-pointer transition-colors ${
          props.checked ? "bg-emerald-500 text-zinc-100" : "text-zinc-800"
        }`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default DefaultRadioButton;

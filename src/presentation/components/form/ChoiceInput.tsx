import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import { PublisherModel } from "../../../domain/models/publisher/publisher-model";
import { AuthorModel } from "../../../domain/models/author/author-model";
import { CategoryModel } from "../../../domain/models/category/category-model";

export type Props = {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  size?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  itemList: GenericItem[];
  onChangeItems: (items: GenericItem[]) => void;
  multiple: boolean;
};

export interface GenericItem extends PublisherModel, AuthorModel, CategoryModel {}

export const ChoiceInput = (props: Props) => {
  const [list, setList] = useState<GenericItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<GenericItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    setList(props.itemList);
  }, [props.itemList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    const filteredList = props.itemList.filter((item: GenericItem) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setList(filteredList);
    setIsListVisible(true);
  };

  const handleItemClick = (item: GenericItem) => {
    const itemIndex = selectedItems.findIndex(
      (selected) => selected.id === item.id
    );

    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, item]);
      props.onChangeItems([...selectedItems, item]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(itemIndex, 1);
      setSelectedItems(updatedItems);
    }

    setIsListVisible(false);
    props.multiple ? setSearchValue("") : setSearchValue(item.name);
  };

  const handleRemoveItem = (itemToRemove: GenericItem) => {
    const updatedItems = selectedItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setSelectedItems(updatedItems);
    props.onChangeItems(updatedItems);
  };

  const handleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div
      className={`flex flex-1 flex-col items-start justify-center gap-1 relative ${
        props.size ? props.size : "w-72"
      }`}
    >
      <label
        htmlFor={props.id}
        className="text-base text-emerald-800 font-sans font-bold"
      >
        {props.label}
      </label>
      <input
        className="w-full h-10 p-4 bg-transparent text-lg text-zinc-800 focus:outline-none border-2 border-solid border-emerald-500 rounded-md focus:shadow-sm focus:shadow-emerald-400"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={searchValue}
        onClick={handleListVisibility}
      />
      {isListVisible && list.length > 0 && (
        <div
          className="items-list absolute top-16 bg-zinc-50 text-base text-zinc-800 border-2 border-solid border-emerald-500 rounded-b-md w-full overflow-y-scroll h-24 z-20"
        >
          <ul className="list-none flex flex-col gap-1 p-2 " onMouseLeave={handleListVisibility}>
            {list.map((item: GenericItem) => (
              <li
                className="list-item p-2 m-2 hover:bg-emerald-600 hover:text-zinc-100 cursor-pointer rounded-md"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <span className="item-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(props.multiple && selectedItems.length > 0) && (
        <div className="selected-items flex flex-wrap">
          <ul className="flex items-start gap-2 flex-1 flex-wrap w-full mt-2">
            {selectedItems.map((item: GenericItem) => (
              <li
                key={item.id}
                className="bg-emerald-400 text-zinc-200 text-base p-2 m-0 rounded-lg flex items-center justify-center gap-2"
              >
                {item.name}{" "}
                <button className="" onClick={() => handleRemoveItem(item)}>
                  <LuX size="16" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="hidden"
        className="sr-only"
        id={`${props.id}-hidden`}
        value={JSON.stringify(selectedItems)}
      />
    </div>
  );
};
export default ChoiceInput;

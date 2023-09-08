import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

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
};

export type GenericItem = {
  name: string;
  id: number;
};

export const ChoiceInput = (props: Props) => {
  const [list, setList] = useState<GenericItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<GenericItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isListVisible, setIsListVisible] = useState(true); 

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
    const itemIndex = selectedItems.findIndex((selected) => selected.id === item.id);

    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(itemIndex, 1);
      setSelectedItems(updatedItems);
    }

    setIsListVisible(false); 
    setSearchValue(""); 
    props.onChangeItems(selectedItems);
  }

  const handleRemoveItem = (itemToRemove: GenericItem) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemToRemove.id);
    setSelectedItems(updatedItems);
  };
  

  return (
    <div
      className={`flex flex-1 flex-col items-start justify-center gap-1 relative ${
        props.size ? props.size : "w-72"
      }`}
    >
      <label
        htmlFor={props.id}
        className="text-sm text-emerald-800 font-sans font-bold"
      >
        {props.label}
      </label>
      <input
        className="w-full h-10 p-4 bg-transparent text-sm text-zinc-800 focus:outline-none border-2 border-solid border-emerald-500 rounded-md focus:shadow-sm focus:shadow-emerald-400"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={searchValue}
        onClick={() => setIsListVisible(true)}
      />
      {isListVisible && list.length > 0 && (
        <div className="items-list absolute top-16 bg-zinc-50 text-sm text-zinc-800 border-2 border-solid border-emerald-500 rounded-b-md w-full overflow-y-scroll h-24">
          <ul className="list-none flex flex-col gap-1 ">
            {list.map((item: GenericItem) => (
              <li className="list-item p-2 m-2 hover:bg-emerald-600 hover:text-zinc-100 cursor-pointer rounded-md" key={item.id} onClick={() => handleItemClick(item)}>
                <span className="item-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
        <div className="selected-items h-32 flex ">
      {selectedItems.length > 0 && (
          <ul className="flex items-start gap-2 flex-1 flex-wrap w-full h-24">
            {selectedItems.map((item: GenericItem) => (
              <li key={item.id} className="bg-emerald-400 text-zinc-200 text-xs p-2 m-0 rounded-lg flex items-center justify-center gap-2">{item.name} <button onClick={() => handleRemoveItem(item)}><LuX size="12" /></button></li>
            ))}
          </ul>
      )}
      </div>
      <input
        type="hidden"
        className="sr-only"
        id={`${props.id}-hidden`}
        value={JSON.stringify(selectedItems)}
      />
    </div>
  );
};

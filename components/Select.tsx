import { useState } from "react";

interface SelectProps {
  options: string[];
}

export const Select = ({ options }: SelectProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>("");
  window.onclick = (e) => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <input
        type="text"
        value={selectedItem}
        placeholder="Transaction Type"
        onFocus={() => {
          setIsMenuOpen(true);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rounded-xl m-10 mb-1 font-semibold indent-4 text-xs bg-gray-100 h-10 w-48"
      ></input>
      {isMenuOpen ? (
        <div className="border border-gray-200 rounded-xl font-semibold w-48 mx-10 text-sm">
          {options.map((item, i) => {
            return (
              <button
                className={`p-4 w-full text-start pb-0 ${
                  i === options.length - 1 ? "pb-4" : ""
                }`}
                onClick={(e) => {
                  setSelectedItem(item);
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

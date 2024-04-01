"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentTab?: number;
  tabsOptions?: number[];
}
export const TabBar = ({
  currentTab = 1,
  tabsOptions = [1, 2, 3, 4],
}: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState(currentTab);
  const handleSelect = (option: number) => {
    setSelected(option);
    setCookie("tab", option.toString());
    router.refresh();
  };
  return (
    <div
      className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-${tabsOptions.length}`}
    >
      {tabsOptions.map((option) => (
        <div key={option}>
          <input
            checked={selected === option}
            onChange={() => {}}
            type="radio"
            id={option.toString()}
            className="peer hidden"
          />
          <label
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center
            peer-checked:bg-blue-500 peer-checked:font-bold
             peer-checked:text-white"
            onClick={() => handleSelect(option)}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

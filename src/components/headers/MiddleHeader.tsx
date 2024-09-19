import React, { useState } from "react";

const MiddleHeader = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleOpenSearch = () => {
    setIsOpenSearch(true);
  };

  const handleBlur = () => {
    if (search === "") setIsOpenSearch(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <header className="container md:mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6 w-6 md:h-8 md:w-8" />
          <h1 className="text-lg font-medium leading-9 tracking-[-0.96px] text-gray-900 md:text-3xl">
            Groceria
          </h1>
        </div>
        <section className="flex hidden md:block">
          <input
            type="text"
            className="w-[400px] rounded-md border border-gray-100 p-1 px-4 py-3 text-base font-normal"
            placeholder="Search.."
          />
          <button className="rounded-md bg-[#00B207] px-6 py-3 text-white">
            Search
          </button>
        </section>
        <div className="flex items-center gap-4">
          <button onClick={handleOpenSearch} className="md:hidden">
            {isOpenSearch ? (
              <input
                className="h-6 w-52 border border-gray-100 p-1 text-xs font-normal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={search}
                autoFocus
              />
            ) : (
              <img src="/Search.svg" />
            )}
          </button>
          <img src="/Heart.svg" className="h-5 w-5 md:h-8 md:w-8" />
          <img src="/Bag.svg" className="h-5 w-5 md:h-8 md:w-8" />
        </div>
      </div>
    </header>
  );
};

export default MiddleHeader;

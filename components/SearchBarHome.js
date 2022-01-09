import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBarHome = ({ label, placeholder, data, setFormData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const router = useRouter();

  console.log(data);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    setFormData({ ...FormData, crypto: searchWord });
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter.slice(0, 5));
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const setWord = (word) => {
    const id = word.toLowerCase();
    router.push(`/dashboard/coin/${id}`);
  };
  return (
    <>
      <div className="search relative">
        <div className="searchinput">
          <label htmlFor="search">{label}</label>
          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            <input
              name="search"
              id="search"
              placeholder={placeholder}
              class="px-4  appearance-none outline-none text-gray-800 w-full bg-transparent"
              value={wordEntered}
              onChange={handleFilter}
            />
            <button
              onClick={clearInput}
              tabIndex="-1"
              class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
            >
              <svg
                class="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        {filteredData.length != 0 && (
          <div
            className={
              "dataresults z-50 no-scrollbar overflow-hidden overflow-y-auto absolute h-" +
              Math.min(filteredData.length, 5) * 10 +
              " w-60 shadow-md	 "
            }
          >
            <ul className=" bg-white border border-gray-100 w-full mt-2 ">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <li
                    key={key}
                    onClick={() => setWord(value.name)}
                    className="dataItem pl-2 pr-2 py-2 border-b-2 text-left border-gray-100 relative cursor-pointer hover:bg-gray-200 hover:text-gray-900"
                  >
                    {value.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBarHome;

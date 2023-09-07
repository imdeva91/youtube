import react, { createContext, useState, useEffect } from "react";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loding, setLoding] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSlectedCetegoriesData(selectCategories);
  }, [selectCategories]);

  const fetchSlectedCetegoriesData = (query) => {
    setLoding(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      setLoding(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loding,
        setLoding,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

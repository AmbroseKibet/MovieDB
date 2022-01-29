import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./AppProvider";

const SearchComponent = () => {
  const search = useRef();
  const { query, setQuery } = useGlobalContext();
  useEffect(() => {
    search.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text "
        className="form-input"
        placeholder="search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={search}
      />
    </form>
  );
};

export default SearchComponent;

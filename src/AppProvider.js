import React from "react";
import { useContext, useState, useEffect } from "react";
const getTheme = () => {
  let theme = "light=theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET}`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [theme, settheme] = useState(getTheme());
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("batman");
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // Theme-toggler
  const toggleTheme = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else {
      settheme("light-theme");
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList = theme;
    // eslint-disable-next-line
  }, [theme]);

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, loading, query, setQuery, isError, movies }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobalContext };
export default AppProvider;

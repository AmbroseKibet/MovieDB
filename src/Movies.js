import React from "react";
import { useGlobalContext } from "./AppProvider";
import MovieComponent from "./MovieComponent";
import SearchComponent from "./SearchComponent";

const Movies = () => {
  const { loading, isError, movies } = useGlobalContext();
  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  return (
    <main>
      <section className="section-container">
        <SearchComponent />
        {isError.show ? <p className="error">{isError.msg}</p> : null}
      </section>
      <section className="movies-container">
        {movies.map((item) => {
          return <MovieComponent key={item.imdbID} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Movies;

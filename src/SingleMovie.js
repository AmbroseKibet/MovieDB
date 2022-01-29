import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET}`;
const SingleMovie = () => {
  const { id } = useParams();
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movie, setmovie] = useState(null);
  const getMovie = async () => {
    setIsloading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&i=${id}`);
      const data = await response.json();
      if (data.Response === "True") {
        setmovie(data);
      } else {
        setIsError(true);
      }

      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [id]);
  if (isError) {
    return <h1 className="text-center">Sorry No Movie To Display</h1>;
  }
  if (isloading) {
    return <div className="loading-spinner"></div>;
  }
  const { Title, Poster, Plot, Director, Runtime, Genre } = movie;
  return (
    <section>
      <h2 className="text-center">{Title}</h2>
      <article className="movie">
        <div className="poster-container">
          <img src={Poster} alt={Title} className="poster" />
        </div>
        <div className="description">
          <h4>
            <span className="headings">Director:</span>
            {Director}
          </h4>

          <h4>
            <span className="headings">Genre:</span>
            {Genre}
          </h4>

          <h4>
            <span className="headings">Runtime:</span>
            {Runtime}
          </h4>

          <h5>
            <span className="headings">Plot:</span>
            {Plot}
          </h5>
        </div>
      </article>

      <Link to="/" className="btn home">
        Back Home
      </Link>
    </section>
  );
};

export default SingleMovie;

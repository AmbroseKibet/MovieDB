import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const defaultPoster =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pcmK6JgNaZhU_Pta5iA9_gHaHa%26pid%3DApi&f=1";
const MovieComponent = ({
  Title: title,
  Year: year,
  imdbID: id,
  Poster: image,
}) => {
  return (
    <Link to={`/movies/${id}`} className="card">
      <img
        src={image === "N/A" ? defaultPoster : image}
        alt={"dggd"}
        className="poster"
      />
      <div className="details">
        <p className="title">{title}</p>
        <p>{year}</p>
      </div>
    </Link>
  );
};

export default MovieComponent;

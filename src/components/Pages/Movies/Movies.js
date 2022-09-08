import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenre from "../../customHooks/useGenre";
import CustomPagination from "../../CustomPagination/CustomPagination";
import Genres from "../../Genres/Genres";
import SingleContent from "../../SingleContent/SingleContent";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState();
  const [content, setContent] = useState([]);
  const fetMoviesData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1e524fa715b99b5838952610238001ac&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumberOfPage(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetMoviesData();
    // eslint-disable-next-line
  }, [genreforURL, page]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((content, keys) => (
            <SingleContent
              key={keys}
              id={content.id}
              poster={content.poster_path}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type="movie"
              vote_average={content.vote_average}
            />
          ))}
      </div>
      {numberOfPage > 1 && (
        <CustomPagination setPage={setPage} numbOfPage={numberOfPage} />
      )}
    </div>
  );
};

export default Movies;

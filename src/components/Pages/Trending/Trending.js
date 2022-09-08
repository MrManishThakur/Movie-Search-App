import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../CustomPagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrendingData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1e524fa715b99b5838952610238001ac&page${page}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrendingData();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((content, keys) => (
            <SingleContent
              key={keys}
              id={content.id}
              poster={content.poster_path}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type={content.media_type}
              vote_average={content.vote_average}
            />
          ))}
      </div>
        <CustomPagination setPage={setPage}/>
    </div>
  );
};

export default Trending;

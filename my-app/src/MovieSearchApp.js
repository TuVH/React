import React, { useEffect, useState } from "react";
//url https://api.themoviedb.org/3/movie/550?api_key=0ad4c4f3f5061eb793e10a42eb32b426
import axios from "axios";
const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0ad4c4f3f5061eb793e10a42eb32b426&query='${query}'`
      );
      if (response.data.results) {
        setMovies(response.data.results);
      }
    }
    fetchData();
  }, [query]);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {movies.length > 0 &&
          movies.map((item, index) => 
            <MovieItem key={item.id} data={item}></MovieItem>
          )}
      </div>
    </div>
  );
};

/**
 * adult: false
backdrop_path: "/t2F7D7NfbdAk2vhkfAE8N1NJNxH.jpg"
genre_ids: (2) [18, 10749]
id: 408508
original_language: "en"
original_title: "Blue Jay"
overview: "Meeting by chance when they return to their tiny California hometown, two former high-school sweethearts reflect on their shared past."
popularity: 6.732
poster_path: "/o5hdBcCUHRTnav6KVwtowZkYVZp.jpg"
release_date: "2016-10-07"
title: "Blue Jay"
video: false
vote_average: 7
vote_count: 369
img ::: https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
 */

const MovieItem = ({data}) => {
  return (
    <div className="bg-white p-3 rounded-2x1 shadow-sm">
      <div className="h-[297px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="images"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
        <p className="text-[#999] text-sm mb-6 !leading-loose">
          {data.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieSearchApp;

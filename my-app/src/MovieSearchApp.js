import React, { useEffect, useState } from "react";
//url https://api.themoviedb.org/3/movie/550?api_key=0ad4c4f3f5061eb793e10a42eb32b426
import axios from "axios";
import useDebounce from "./components/hook/useDebounce";
import LoadingSkeleton from "./components/loading/LoadingSkeleton";
const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0ad4c4f3f5061eb793e10a42eb32b426&query='${queryDebounce}'`
      );
      if (response.data.results) {
        setLoading(false);
        setMovies(response.data.results);
      }
    }
    fetchData();
  }, [queryDebounce]);
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
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieLoadingItem></MovieLoadingItem>
          <MovieLoadingItem></MovieLoadingItem>
          <MovieLoadingItem></MovieLoadingItem>
          <MovieLoadingItem></MovieLoadingItem>
          <MovieLoadingItem></MovieLoadingItem>
          <MovieLoadingItem></MovieLoadingItem>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {movies.length > 0 &&
          !loading &&
          movies.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};


const MovieLoadingItem = () => {
  return (
    <div className="bg-white p-3 rounded-2x1 shadow-sm">
      <div className="h-[297px]">
        <LoadingSkeleton height="100%"></LoadingSkeleton>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-semibold mb-4">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <p className="text-[#999] text-sm mb-6 !leading-loose">
          <LoadingSkeleton height="10px" marginBottom="5px"></LoadingSkeleton>
          <LoadingSkeleton height="10px" marginBottom="5px"></LoadingSkeleton>
          <LoadingSkeleton height="10px" marginBottom="5px"></LoadingSkeleton>
        </p>
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
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

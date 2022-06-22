import React, { useEffect } from "react";
//url https://api.themoviedb.org/3/movie/550?api_key=0ad4c4f3f5061eb793e10a42eb32b426
import axios from "axios";
const MovieSearchApp = () => {
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=0ad4c4f3f5061eb793e10a42eb32b426&query=''`
      );
      console.log(result.data);
    }
    fetchData();
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movie..."
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
      </div>
    </div>
  );
};

const MovieItem = () => {
  return (
    <div className="bg-white p-3 rounded-2x1 shadow-sm">
      <div className="h-[297px]">
        <img
          src="https://images.unsplash.com/photo-1655618746151-aed1c3eb718c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="images"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit</h3>
        <p className="text-[#999] text-sm mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, in?
          Laboriosam, necessitatibus veritatis. Dolor aut veritatis magni,
          quibusdam, officia voluptatum libero animi adipisci illo voluptas,
          aspernatur esse quas reiciendis. Ipsam!
        </p>
      </div>
    </div>
  );
};

export default MovieSearchApp;

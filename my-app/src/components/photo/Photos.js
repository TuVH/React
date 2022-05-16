import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (pages) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pages}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPages, setNextPages] = useState(1);

  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const photos = await getRandomPhotos(nextPages);
    const newPhotos = [...randomPhotos, ...photos];
    setRandomPhotos(newPhotos);
    setNextPages(nextPages + 1);
  };

  useEffect(() => {
    //side-effects
    handleLoadMore.current();
  }, [handleLoadMore]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
          onClick={handleLoadMore.current}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;

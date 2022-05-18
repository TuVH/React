import axios from "axios";
import React, { useRef, useState } from "react";
import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`something was wrong: ${error}`);
    }
  };

  const handleUpdateValue = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 block w-full rounded-md p-5 mb-5 transition-all focus:border-blue-400"
        placeholder="type your keyword..."
        defaultValue={query}
        onChange={handleUpdateValue}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10">
          loading...
        </div>
      )}
      {!loading && errorMessage && <p className="text-red-400 my-5">{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => <h3 key={item.title} className="p-3 bg-gray-100 rounded-sm">{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;

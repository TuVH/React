import axios from "axios";
import React, { useRef, useState } from "react";
import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
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

  const handleUpdateValue = lodash.debounce((e) => {setQuery(e.target.value)},500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 md-5"
        defaultValue={query}
        onChange={handleUpdateValue}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin">
          loading...
        </div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;

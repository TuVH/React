import useHackerNewsHook from "../hook/useHackerNewsHook";

const HackerNewsWithCustomHook = () => {
  const { query, setQuery, setUrl, loading, errorMessage, data } =
    useHackerNewsHook(`https://hn.algolia.com/api/v1/search?query=''`, []);
    console.log(data);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5  transition-all focus:border-blue-400"
          placeholder="type your keyword..."
          defaultValue={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
          onClick={(e) => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          fetching...
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10">
          loading...
        </div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.length > 0 &&
          data.map((item, index) => {
            if (item.title === null || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-sm">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithCustomHook;

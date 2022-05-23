import axios from "axios";
import React, { useReducer, useRef } from "react";
//import lodash from "lodash";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      //const newState = JSON.parse(JSON.stringify(state));
      return { ...state, hits: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_URL":
      return { ...state, url: action.payload };
    default:
      break;
  }
  return state;
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true, // setLoading(true);
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [], // setHits(response.data?.hits || []);
      });
      dispatch({
        type: "SET_LOADING",
        payload: false, // setLoading(false);
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false, // setLoading(false);
      });
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: `something was wrong: ${error}`, // setErrorMessage(`something was wrong: ${error}`);
      });
    }
  };

  // // const handleUpdateValue = lodash.debounce((e) => {
  // //   setQuery(e.target.value);
  // // }, 500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5  transition-all focus:border-blue-400"
          placeholder="type your keyword..."
          defaultValue={state.query}
          onChange={(e) => {
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value, // setQuery(e.target.value)
            });
          }}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
          disabled={state.loading}
          onClick={() => 
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`, // setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
            })
          }
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          fetching....
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10">
          loading...
        </div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsWithReducer;

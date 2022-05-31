import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsHook(initialUrl, initialData){
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`something was wrong: ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return{
    query,
    setQuery,
    setUrl,
    loading,
    errorMessage,
    data
  }
}
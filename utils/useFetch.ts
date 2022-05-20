import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    errors: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((state) => ({ ...state, loading: true }));
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "False") {
        setState({ data: [], loading: false, errors: true });
      } else {
        setState({ data: data.Search, loading: false, errors: false });
      }
    };
    if (url !== "") {
      fetchData();
    }
  }, [url]);

  return state;
};

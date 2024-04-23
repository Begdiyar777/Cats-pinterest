import { useEffect, useState } from "react";
import { UseEventListener } from "./useEventListener";
const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "live_V33QpD2ZaN60aUCYbtkmpWNGK3y6zRQ8mylM6qJ9FQRtpHyRAPWq1ERb63wbG71S";

export function useFetch() {
  const [fetchData, setfetchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { fetching, setFetching } = UseEventListener(setCurrentPage);
  //Запрос котов с сервера
  useEffect(() => {
    setFetching(true);
    fetch(`${API_URL}?limit=25&page=${currentPage}`, {
      mode: "cors",
      headers: { "x-api-key": API_KEY },
    }[fetchData, setFetching])
      .then((res) => res.json())
      .then((data) => setfetchData([...fetchData, ...data]))
      .catch((e) => console.log(e))
      .finally(() => setFetching(false));
  }, [currentPage]);

  return {
    fetchData: fetchData,
    fetching: fetching,
    setCurrentPage: setCurrentPage,
  };
}

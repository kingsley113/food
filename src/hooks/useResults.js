import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (query) => {
    try {
      const response = await yelp.get("/search", {
        params: { term: query, limit: 50, location: "seattle" },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Whoops, something went wrong...");
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};

import { useEffect, useState } from "react";
import axios from "axios";

const useAutocomplete = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`/api/search/suggestions?q=${query}`);
        setSuggestions(res.data || []);
      } catch (err) {
        setError("Failed to fetch suggestions");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  return { suggestions, loading, error };
};

export default useAutocomplete;

// src/components/Search/SearchBar.jsx
import { useState } from "react";
import useAutocomplete from "@/hooks/useAutocomplete";
import SuggestionList from "./SuggestionList";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { suggestions, loading, fetchSuggestions } = useAutocomplete();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
      />
      <SuggestionList suggestions={suggestions} loading={loading} />
    </div>
  );
};

export default SearchBar;

// src/components/Search/SuggestionList.jsx
const SuggestionList = ({ suggestions, loading }) => {
  if (loading) {
    return (
      <div className="absolute w-full bg-white border border-t-0 border-gray-300 shadow-lg z-10 mt-1 px-4 py-2">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!suggestions.length) return null;

  return (
    <ul className="absolute w-full bg-white border border-t-0 border-gray-300 shadow-lg z-10 mt-1">
      {suggestions.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;

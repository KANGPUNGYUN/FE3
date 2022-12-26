import { useState } from "react";

function SearchBar({ searching }) {
  const [keyword, setKeyword] = useState("");

  const handleInp = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searching(keyword);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">검색어를 입력하세요</label>
        <input type="text" id="keyword" value={keyword} onChange={handleInp} />
        <button>검색</button>
      </form>
    </nav>
  );
}

export default SearchBar;

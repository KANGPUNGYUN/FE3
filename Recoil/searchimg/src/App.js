import searchImg from "./imgApi";
import SearchBar from "./components/SearchBar";
import ListImg from "./components/ListImg";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleKeyword = async (keyword) => {
    const result = await searchImg(keyword);
    setImages(result);
  };

  return (
    <div>
      App
      <SearchBar searching={handleKeyword} />
      <ListImg images={images} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const SearchBox = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
  };
  const errorFunction = () => {
    throw new Error("holis");
  };

  return (
    <>
      <div>
        <button onClick={errorFunction}>error</button>
      </div>
      <input
        type="string"
        placeholder="busca un gif!"
        value={inputSearch}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchBox;

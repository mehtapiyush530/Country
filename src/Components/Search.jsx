import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name:"
        className="h-[3rem] w-[20rem] border border-black ml-[30px] mt-[50px] px-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;

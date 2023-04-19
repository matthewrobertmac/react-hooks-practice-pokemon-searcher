import React from "react";

function Search({searchInput, formSearchInput}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
            value={searchInput}
            className="prompt"
            onChange={(e) => {
              formSearchInput(e.target.value)
              console.log(e.target.value)
            }} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;


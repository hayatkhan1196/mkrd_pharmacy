import React from "react";
import CheckBox from "./CheckBox";
import SearchField from "../SearchBarInput/searchField";

const FilterCheckBoxes = ({ data, title, placeholder, hasSearchBar }) => {
  console.log(data);
  return (
    <div>
      <h3>{title}</h3>
      {hasSearchBar && <SearchField placeholder={placeholder} />}
      <div className="check-boxes-main">
        {data.map((e, index) => {
          return <CheckBox key={index} val={e} />;
        })}
      </div>
    </div>
  );
};

export default FilterCheckBoxes;

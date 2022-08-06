import React from "react";
import FilterCheckBoxes from "components/ReUseableComponents/CheckBox/FilterCheckBoxes";
import filterData from "../../../JSON_DATA/filters_data.json";
import prescription from "../../../JSON_DATA/prescription_required.json";
import genric from "../../../JSON_DATA/is_generic.json";

const Filters = () => {
  return (
    <div className=" col-lg-3 filters m-0">
      <div className="sort-box p-3 box-shadow-bg m-0">
        <p className="m-0 mb-2">Sort by</p>
        <div className="drop-down">
          <select className="custom-select" id="inputGroupSelect03">
            <option selected>Relevance</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="filters-container box-shadow-bg">
        <div className="filter-box p-3  m-0 mt-3">
          <p className="m-0 mb-3">Filter by</p>
          <FilterCheckBoxes
            data={filterData}
            title="Brand"
            placeholder="Search Brand"
            hasSearchBar={true}
          />
        </div>
        <hr className="mb-2" />
        <div className="filter-box p-3  m-0">
          <FilterCheckBoxes
            data={filterData}
            title="Product Form"
            placeholder="Search Product Form"
            hasSearchBar={true}
          />
        </div>
        <hr className="mb-2" />
        <div style={{ height: 141 }} className="filter-box p-3  m-0">
          <FilterCheckBoxes
            data={prescription}
            title="Prescription Required"
            hasSearchBar={false}
          />
        </div>
        <hr className="mb-2" />
        <div style={{ height: 141 }} className="filter-box p-3  m-0">
          <FilterCheckBoxes
            data={genric}
            title="Is Generic"
            hasSearchBar={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

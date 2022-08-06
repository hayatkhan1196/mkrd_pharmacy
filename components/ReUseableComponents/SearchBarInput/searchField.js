import React from "react";
import Image from "next/image";
import styles from "./SearchBar.module.scss";

const SearchField = ({ placeholder }) => {
  return (
    <div className={styles.search_bar_container}>
      <div className="d-flex justify-content-center align-items-center">
        <button className={styles.search_bar_button} style={{}}>
          <Image src="/assets/search.svg" alt="Logo" width={20} height={20} />{" "}
        </button>
        <input
          className={styles.search_bar_input}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchField;

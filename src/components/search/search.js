import React from "react";
import PropTypes from "prop-types";

import "./search.css";

// eslint-disable-next-line react/prop-types
export default function Search({ onChange, onKeyUp }) {
  return (
    <div className="search">
      <input
        onChange={onChange}
        onKeyUp={onKeyUp}
        type="text"
        className="search-bar"
        placeholder="Search a city..."
      />
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

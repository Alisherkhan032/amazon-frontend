import React from "react";

const Select = ({ options, label, onChange, value }) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

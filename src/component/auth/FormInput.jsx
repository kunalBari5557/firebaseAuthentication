import React from "react";

const FormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        marginBottom: "20px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        boxShadow: "none",
      }}
    />
  );
};

export default FormInput;

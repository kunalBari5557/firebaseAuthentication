import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: "#0077FF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "16px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

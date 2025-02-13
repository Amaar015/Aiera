import React from "react";

const Buttons = ({
  title,
  paddings,
  fontSizes,
  radius,
  background,
  colors,
  icon,
  fontWeight,
  exteaClass,
  widths,
}) => {
  const buttonStyle = {
    padding: paddings,
    fontSize: fontSizes,
    borderRadius: radius,
    background: background,
    color: colors,
    fontWeight: fontWeight,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    transition: "all 0.3s linear",
    cursor: "pointer",
    zIndex: 1,
    width: widths,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "none";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
      }}
    >
      {title} {icon}
    </button>
  );
};

export default Buttons;

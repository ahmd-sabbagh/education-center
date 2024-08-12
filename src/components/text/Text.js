import React from "react";
import "./style.css";
const textSizes = {
  regular: "24px",
  small: "16px",
};
const FONTS = {
  light: "light",
  medium: "medium",
  bold: "bold",
};

export function Text({
  children,
  type = "",
  weight = "medium",
  size = "small",
  style,
}) {
  const fontSize = textSizes[size];
  const fontFamily = FONTS[weight] || FONTS.medium;
  return (
    <>
      {type === "h2" ? (
        <h2 style={{ fontFamily: fontFamily, fontSize: fontSize, ...style }}>
          {children}
        </h2>
      ) : type === "h3" ? (
        <h3 style={{ fontFamily: fontFamily, fontSize: fontSize, ...style }}>
          {children}
        </h3>
      ) : type === "p" ? (
        <p style={{ fontFamily: fontFamily, fontSize: fontSize, ...style }}>
          {children}
        </p>
      ) : (
        <span style={{ fontFamily: fontFamily, fontSize: fontSize, ...style }}>
          {children}
        </span>
      )}
    </>
  );
}

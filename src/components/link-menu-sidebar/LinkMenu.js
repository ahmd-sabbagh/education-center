import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { ArrowDown } from "../../assets";
import { Text } from "../../components";

function LinkMenu({ item }) {
  const Navigate = useNavigate();
  return (
    <>
      {item?.type ? (
        <Link className="link-menu d-flex align-items-center justify-content-between px-4">
          <div className="d-flex align-items-center gap-4">
            <span>{item.icon}</span>
            <Text size="regular" style={{ color: "#fff" }}>
              {item.name}
            </Text>
          </div>
        </Link>
      ) : (
        <button
          className="link-menu d-flex align-items-center justify-content-between px-4"
          onClick={() => {
            Navigate(item.route);
          }}
        >
          <div className="d-flex align-items-center gap-4">
            <span>{item.icon}</span>
            <Text size="regular" style={{ color: "#fff" }}>
              {item.name}
            </Text>
          </div>
          <span>
            <ArrowDown />
          </span>
        </button>
      )}
    </>
  );
}

export default LinkMenu;

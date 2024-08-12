import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { ArrowDown } from "../../assets";
import { Text } from "../../components";

export function Drop({ title, placholder }) {
  const [arrow, setArrow] = useState(false);
  const tapRef = useRef();
  const clickRef = useRef();
  useEffect(() => {
    const tapHandler = (e) => {
      if (
        !tapRef?.current?.contains(e.target) &&
        !clickRef?.current?.contains(e.target)
      ) {
        setArrow(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  return (
    <div className="Drop d-flex flex-column gap-2 position-relative">
      <Text style={{ color: "#2B0F52" }}>{title}</Text>
      <div
        ref={clickRef}
        className="select d-flex align-items-center justify-content-between px-4 pointer"
        onClick={() => {
          setArrow(!arrow);
        }}
      >
        <Text size="small" weight="light">
          {placholder}
        </Text>
        <span className={`arrow ${arrow ? "up" : ""}`}>
          <ArrowDown />
        </span>
      </div>
      {arrow && <div ref={tapRef} className="menu position-absolute"></div>}
    </div>
  );
}

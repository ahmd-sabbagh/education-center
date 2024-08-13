import React, { useEffect, useRef } from "react";
import "./style.css";
import { WhiteLogo } from "../../assets/svg";
import { data } from "./data";
import LinkMenu from "../link-menu-sidebar/LinkMenu";

export function SideBar({ state,setState }) {
  const tapRef = useRef();
  const clickRef = useRef();
  useEffect(() => {
    const tapHandler = (e) => {
      if (
        !tapRef?.current?.contains(e.target) &&
        !clickRef?.current?.contains(e.target)
      ) {
        setState(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  return (
    <div className={`SideBar py-4 ${state ? "open" : ""}`} ref={clickRef}>
      <div className="logo flex-c">
        <WhiteLogo />
      </div>
      {/* list */}
      <div className="list-menu d-flex flex-column">
        {data.map((item, idx) => (
          <LinkMenu item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./style.css";
import { WhiteLogo } from "../../assets/svg";
import { data } from "./data";
import LinkMenu from "../link-menu-sidebar/LinkMenu";

export function SideBar() {
  return (
    <div className="SideBar py-4">
      <div className="logo flex-c">
        <WhiteLogo />
      </div>
      {/* list */}
      <div className="list-menu d-flex flex-column">
        {data.map((item,idx) => (
          <LinkMenu item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

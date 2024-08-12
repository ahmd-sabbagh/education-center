import React from "react";
import { SearchIcon } from "../../assets";
import './style.css'

export function Search() {
  return (
    <div className="Search d-flex align-items-center gap-2 border p-3">
      <SearchIcon />
      <input className="border-0 bg-transparent flex-grow-1" type="text" placeholder="ابحث عن ما تريد" />
    </div>
  );
}

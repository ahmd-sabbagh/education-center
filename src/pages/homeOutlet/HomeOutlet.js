import React from "react";
import { IconBar, Search, SideBar, Text } from "../../components";
import { Notification, UserBar } from "../../assets";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

function HomeOutlet() {
  return (
    <div className="HomeOutlet" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="d-flex">
        <SideBar />
        <div className="outlet flex-grow-1">
          {/* Head */}
          <div className="haed-bar p-4 px-5 d-flex justify-content-between bg-white">
            <Search />
            <div className="icons d-flex align-items-center gap-4">
              <IconBar icon={<Notification />} />
              <IconBar icon={<UserBar />} />
              <Link className="contact-us flex-c" to="/login"><Text>{"اتصل بنا"}</Text></Link>
            </div>
          </div>
          {/* Head */}
          <div className="outletContent p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOutlet;

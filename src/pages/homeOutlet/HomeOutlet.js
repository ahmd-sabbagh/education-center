import React, { useState } from "react";
import { IconBar, Search, SideBar, Text } from "../../components";
import { Menu, Notification, UserBar } from "../../assets";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

function HomeOutlet() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="HomeOutlet" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="d-flex">
        <SideBar state={sideBar} setState={setSideBar} />
        <div className="outlet flex-grow-1">
          {/* Head */}
          <div className="haed-bar py-3 py-md-4 px-3 px-md-5 d-flex flex-column-reverse flex-md-row gap-3 justify-content-between bg-white">
            <div
              className="burger-menu flex-c d-xl-none pointer"
              onClick={() => {
                setSideBar(!sideBar);
              }}
            >
              <Menu />
            </div>
            <Search />
            <div className="icons d-flex align-items-center gap-3 gap-md-4">
              <IconBar icon={<Notification />} />
              <IconBar icon={<UserBar />} />
              <Link className="contact-us flex-c" to="/login">
                <Text>{"اتصل بنا"}</Text>
              </Link>
            </div>
          </div>
          {/* Head */}
          <div className="outletContent p-3 p-md-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOutlet;

import React from "react";
import "./style.css";
import { Groups, NumberStudents, Text } from "../../components";
import { data } from "./data";
import { DateNote, images } from "../../assets";
const tableData = [
  {
    title: "المجموعة الحالية ( 3 اعدادي )",
    start: {
      title: "وقت البداية",
      icon: <DateNote />,
      time: "08:30",
      date: "22 أكتوبر 2024",
    },
    end: {
      title: "وقت البداية",
      icon: <DateNote />,
      time: "08:30",
      date: "22 أكتوبر 2024",
    },
  },
];

function Home() {
  return (
    <div className="Home">
      <Text type="h2" size="regular" weight="bold">
        {"الصفحة الرئيسية"}
      </Text>
      <div className="icons-container mt-5 mb-5 d-flex justify-content-between align-items-center">
        {data.map((item, idx) => (
          <NumberStudents {...item} key={idx} />
        ))}
      </div>
      <div className="row g-4">
        <div className="col-8">
          <img className="charts" src={images.Charts} />
        </div>
        <div className="col-4">
          <Groups {...tableData[0]} />
          <div className="group-dubble mt-5">
            <Text
              weight="bold"
              size="regular"
              style={{ marginBottom: "30px", display: "block" }}
            >
              {"المجموعات القادمة"}
            </Text>
            <div className="cont d-flex flex-column gap-4">
              <Groups {...tableData[0]} />
              <span className="line"></span>
              <Groups {...tableData[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

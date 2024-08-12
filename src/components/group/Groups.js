import React from "react";
import "./style.css";
import { Text } from "../../components";

export function Groups({ title, start = {}, end = {} }) {
  return (
    <div className="Groups">
      <Text>{title}</Text>
      <div className="d-flex justify-content-between">
        {/* start */}
        <div className="d-flex flex-column gap-2 mt-3">
          <Text style={{ color: "#888FA0" }}>{start.title}</Text>
          <div className="d-flex align-items-center gap-2">
            <span>{start.icon}</span>
            <div className="d-flex flex-column ">
              <Text>{start.time}</Text>
              <Text>{start.date}</Text>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="d-flex flex-column gap-2 mt-3">
          <Text style={{ color: "#888FA0" }}>{end.title}</Text>
          <div className="d-flex align-items-center gap-2">
            <span>{end.icon}</span>
            <div className="d-flex flex-column ">
              <Text>{end.time}</Text>
              <Text>{end.date}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

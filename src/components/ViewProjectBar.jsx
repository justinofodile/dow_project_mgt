import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

const ViewProjectBar = () => {
  return (
    <div className="text-center max-w-6xl mx-auto mt-16 flex justify-center gap-3 items-center">
      <h1 className="hView">
        View project Details <ArrowRightOutlined />
      </h1>
      <button className="viewBtn">View</button>
    </div>
  );
};

export default ViewProjectBar;

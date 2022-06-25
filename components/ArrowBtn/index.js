import React from "react";
import Image from "next/image";

const index = ({ props }) => {
  return (
    <div
      {...props}
      style={{
        height: "59px",
        width: "59px",
        backgroundColor: "#FF7B73",
        boxShadow:
          "13px 30px 13px rgba(56, 37, 0, 0.01), 7px 17px 11px rgba(56, 37, 0, 0.05), 3px 7px 8px rgba(56, 37, 0, 0.09), 1px 2px 4px rgba(56, 37, 0, 0.1), 0px 0px 0px rgba(56, 37, 0, 0.1)",
        borderRadius: "80px",
      }}
      className="flex justify-center content-center p-3"
    >
      <Image src="/img/Arrow1.svg" height={"100%"} width={"100%"} />
    </div>
  );
};

export default index;

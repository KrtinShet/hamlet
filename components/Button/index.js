import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ children, link, ...props }) => {
  return (
    <Link href={link}>
      <div
        {...props}
        className="flex align-middle py-3 px-5 w-max "
        style={{
          background: "rgba(255, 113, 104, 0.2)",
          borderRadius: "19px",
          border: "1px solid #FFFFFF",
          boxShadow: "2px 4px 0px #FF7B73",
          display: "flex",
          alignContent: "center",
          width: "max-content",
          padding: "12px 18px",
        }}
      >
        <span
          style={{ color: "#2E1513", fontWeight: "bold", marginRight: "8px" }}
          className="gilroy-l"
        >
          {children}
        </span>
        <Image src={"/img/copy.svg"} height={16} width={16} />
      </div>
    </Link>
  );
};

export default index;

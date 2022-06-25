import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ props }) => {
  return (
    <Link href={"https://discord.gg/uGDnQvPJ"}>
      <div
        {...props}
        style={{
          backgroundColor: "#5865F2",
          width: "160px",
          padding: "20px",
          height: "51px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          borderRadius: "30px",
        }}
      >
        <Image src={"/img/discordtxt.svg"} width={139} height={51} />
      </div>
    </Link>
  );
};

export default index;

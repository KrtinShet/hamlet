import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "./../components/Button";

const Community = () => {
  return (
    <div>
      <Header />
      <h1
        className="mt-10 text-4xl gilroy-eb px-5"
        style={{ color: "#2E1513" }}
      >
        Community
        <span style={{ color: "#FF7B73" }}>.</span>
      </h1>

      <div className="flex justify-center">
        <Image src={"/img/tabgirl.png"} width="348px" height="348px" />
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <Button
          className="bg-read "
          link={
            "https://docs.google.com/forms/d/e/1FAIpQLSdWGTNCwZvUcOpeX5LEO8_Wt44BbqTpTO0vs1GUZMGWRNamEg/viewform"
          }
        >
          Getin Touch
        </Button>
      </div>
      <ul
        style={{
          width: "85%",
          margin: "0 auto",
        }}
        className="poppins text-sm"
      >
        <li className="mb-1">👉🏻 Flip creator-NFTs on secondary marketplaces</li>
        <li className="mb-1">
          👉🏻 Not just consume content from creators, but invest in their growth
        </li>
        <li className="mb-1">
          👉🏻 Have an ownership in the community with creator-NFTs
        </li>
        <li className="mb-1">
          👉🏻 Help your favourite creators sell digital collectibles and share in
          the profits
        </li>
        <li className="mb-1">
          👉🏻 Raise and vote in proposals to appropriately use community treasury
          with on-chain governance
        </li>
      </ul>
    </div>
  );
};

export default Community;

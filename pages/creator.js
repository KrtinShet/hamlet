import Header from "../components/Header";
import Image from "next/image";
import Button from "./../components/Button";

function Creator() {
  return (
    <div>
      <Header />
      <h1
        className="mt-10 text-4xl gilroy-eb px-5"
        style={{ color: "#2E1513" }}
      >
        Creator
        <span style={{ color: "#FF7B73" }}>.</span>
      </h1>

      <div className="flex justify-center mt-4 mb-6">
        <Image src={"/img/girl-lappy2.png"} width="348px" height="348px" />
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
        <li className="mb-1">
          👉🏻 Build a real decentralised community powered by your own
          creator-NFTs
        </li>
        <li className="mb-1">
          👉🏻 Create unlockable content for your superfans
        </li>
        <li className="mb-1">
          👉🏻 Creator storefront to sell digital collectibles and merch with the
          help of your community
        </li>
        <li className="mb-1">
          👉🏻 Community treasury to share royalties with the community
        </li>
        <li className="mb-1">
          👉🏻 Let your fans become your managers and marketers and grow your
          community and brand together
        </li>
      </ul>
    </div>
  );
}

export default Creator;

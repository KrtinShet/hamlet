import DiscordBtn from "./../components/DiscordBtn";
import Button from "./../components/Button";
import ArrowBtn from "./../components/ArrowBtn";
import Image from "next/image";
import PersonDog from "./../public/img/person-god.png";
import SectionBG from "./../public/img/sec2-bg.svg";
import CreamContainerImg from "./../public/img/cream-container.png";
import GirlLappy2 from "./../public/img/girl-lappy2.png";
import TabGril from "./../public/img/tabgirl.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex justify-end mt-6 mr-10">
          <Button
            className="bg-read"
            link={
              "https://docs.google.com/forms/d/e/1FAIpQLSdWGTNCwZvUcOpeX5LEO8_Wt44BbqTpTO0vs1GUZMGWRNamEg/viewform"
            }
          >
            Getin Touch
          </Button>
        </div>
        <div className="text-center">
          <h1
            className="text-center mt-16 text-6xl gilroy-eb"
            style={{ color: "#2E1513" }}
          >
            Hamlet
            <span style={{ color: "#FF7B73" }}>.</span>
          </h1>
          <div style={{ color: "#2E1513" }} className="text-xl mt-3">
            Get your community involved <br />
            in your purpose.
          </div>

          <div className="flex justify-center mt-5 mb-5">
            <DiscordBtn />
          </div>

          <Image src={PersonDog} />
        </div>
      </section>

      <section className="mt-16 relative" id="creatorssection">
        <div className="absolute z-10 right-10 -top-5">
          <Link href={"#creatorssection"}>
            <ArrowBtn />
          </Link>
        </div>

        <div className="absolute z-10 top-20">
          <div className="absolute z-10 top-6 ">
            <div>
              <Image src={GirlLappy2} />
            </div>

            <div className=" flex  flex-col justify-center px-4">
              <div className="relative">
                <h3 className="text-3xl gilroy-eb">Creators</h3>
                <hr
                  className="w-1/3 absolute top-6 -z-10"
                  style={{
                    border: "3px solid",
                    backgroundColor: "#FFD6BC",
                    borderColor: "#FFD6BC",
                    borderRadius: "15%",
                    color: "#FFD6BC",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="text-xs w-3/5">
                  Build a real decentralized community powered by your own
                  creator-NFT’s
                </div>
                <Button link={"/creator"}>Learn More</Button>
              </div>
            </div>
          </div>

          <Image src={CreamContainerImg} />
        </div>

        <div className="absolute z-10 top-2/4">
          <div className="absolute z-10 top-6 ">
            <div>
              <Image src={TabGril} />
            </div>

            <div className=" flex  flex-col justify-center px-4">
              <div className="relative">
                <h3 className="text-3xl gilroy-eb">Community</h3>
                <hr
                  className="w-2/6 absolute top-7 -z-10"
                  style={{
                    border: "3px solid",
                    backgroundColor: "#FFD6BC",
                    borderColor: "#FFD6BC",
                    borderRadius: "15%",
                    color: "#FFD6BC",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="text-xs w-3/5">
                  Gain Community NFT’s from creators to participate in all
                  community events
                </div>
                <Button link={"/community"}>Learn More</Button>
              </div>
            </div>
          </div>

          <Image src={CreamContainerImg} />
        </div>

        <Image src={SectionBG} />
      </section>

      <footer className="relative -top-10 text-center ">
        <div className="flex p-2 flex-nowrap">
          <div className="ml-3 flex-grow">
            <Image src={"/img/nfts/1.png"} height={123} width={123} />
          </div>
          <div className="ml-3">
            <Image src={"/img/nfts/2.png"} height={123} width={123} />
          </div>
          <div className="ml-3">
            <Image src={"/img/nfts/3.png"} height={123} width={123} />
          </div>
          <div className="ml-3">
            <Image src={"/img/nfts/4.png"} height={123} width={123} />
          </div>

          {/* <div className="ml-3">
            <Image src={"/img/nfts/5.png"} height={123} width={123} />
          </div> */}
        </div>

        <div>
          <h1
            className="text-center mt-32 text-3xl gilroy-eb px-5"
            style={{ color: "#2E1513" }}
          >
            Vibe, Create and Earn <br />
            Together <br />
            As A Community
            <span style={{ color: "#FF7B73" }}>.</span>
          </h1>
          <div
            style={{ color: "#2E1513" }}
            className="text-xl mt-3 text-center"
          >
            Collect Creator NFTs from your favourite <br />
            creators to be a part of their <br />
            Community
          </div>
        </div>

        <div className="flex justify-center my-10">
          <DiscordBtn />
        </div>
        <div className="flex justify-center">
          <hr
            className=" w-9/12 "
            style={{
              border: "2px solid",
              backgroundColor: "#FF7B73",
              borderColor: "#FF7B73",
              borderRadius: "55%",
              color: "#FF7B73",
            }}
          />
        </div>

        <div className="flex justify-evenly my-10">
          <span>News</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>

        <span
          style={{
            color: "rgba(10, 20, 47, 0.44);",
          }}
        >
          Copyright © 2022 Hamlet. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

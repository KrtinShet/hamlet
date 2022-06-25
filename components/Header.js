import Image from "next/image";
import Link from "next/link";
import DiscordBtn from "./../components/DiscordBtn";

export default function Header() {
  return (
    <div className="mx-auto text-center mt-8 mx-9">
      <div className="flex justify-between align-middle container  ">
        <Link href={"/"}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              height: "48px",
              width: "59px",
              background: "#FFEFD1",
              boxShadow:
                "3px 7px 8px rgba(56, 37, 0, 0.09), 0px 0px 0px rgba(56, 37, 0, 0.1)",
              borderRadius: "15px",
            }}
          >
            <div
              className=""
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image src={"/img/backarrow.svg"} height={56} width={56} />
            </div>
          </div>
        </Link>
        <DiscordBtn />
      </div>
    </div>
  );
}

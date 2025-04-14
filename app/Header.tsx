import Image from "next/image";
import React from "react";
import NavMenu from "./(landing-page)/components/NavMenu";

export default function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/Assets/logo-black.png"
            width={50}
            height={50}
            alt="Dinewithdominic logo"
            className="w-[75px] sm:w-auto"
          />
          <h4>dinewithdominic</h4>
        </div>

        <NavMenu />
      </div>
    </div>
  );
}

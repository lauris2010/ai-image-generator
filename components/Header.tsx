import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo-500x281.png"
          alt="logo"
          height={60}
          width={60}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">Ai </span>Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL·E, Chat GTP & Microsoft Azure
          </h2>
        </div>
      </div>
      <div className="flex text-cs md:text-base items-center text-gray-500">
        <Link
          href={"https://github.com/lauris2010"}
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;

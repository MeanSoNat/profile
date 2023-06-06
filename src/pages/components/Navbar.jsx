import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default () => {
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Info | Contact", path: "/blog" },
  ];
  const path = usePathname();
  return (
    <nav className="w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src="/logo.png" width={100} height={0} alt="Logo"></Image>
          </Link>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
        >
          <ul className="justify-end items-center space-y-8 pr-5 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-xl text-white hover:font-bold text-grow"
                >
                  <Link
                    className={`${
                      item.path === path ? "text-yellow-600 font-bold" : ""
                    }`}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a href="/" className="py-3 px-4 rounded-md shadow">
            <Image
              className="rounded-full p-1 border-2"
              src="/profile.jpg"
              width={80}
              height={100}
            ></Image>
          </a>
        </div>
      </div>
    </nav>
  );
};

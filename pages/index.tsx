import Image from "next/image";
import { Inter } from "next/font/google";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsList,
  BsTwitter,
} from "react-icons/bs";
import React from "react";
import { BiHash, BiSolidHomeCircle, BiUser } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiSolidHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-3 ">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full text-[#219be8] p-4 transition-all duration-300 ease-in-out cursor-pointer">
            <BsTwitter />
          </div>
          <div className="text-2xl mt-4 font-semibold pr-6">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 transition-all duration-300 ease-in-out w-fit cursor-pointer mt-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 mr-5 ml-4">
              <button className="text-lg bg-[#219be8] w-full text-white rounded-full py-2">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-slate-600"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

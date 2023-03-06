import React from "react";
import { Link, useLocation } from "react-router-dom";
import DiscordWhite from "../assets/images/discord-white.png";
import Discord from "../assets/images/Discord.png";
import InstagramWhite from "../assets/images/instagram-white.png";
import Instagram from "../assets/images/Instagram.png";
import largeLogoWhite from "../assets/images/large-logo-white.png";
import largeLogo from "../assets/images/large-logo.png";
import tiktokWhite from "../assets/images/tiktok-white.png";
import tiktok from "../assets/images/tiktok.png";
import twitterWhite from "../assets/images/twitter-white.png";
import twitter from "../assets/images/Twitter.png";

export default function Footer() {
  const { pathname } = useLocation();

  const path = pathname.replace("/", "");

  const dark = path === "roadmap";
  const hide = path === "home" || path === "gallary";
  const bg_color =
    path === "roadmap"
      ? "bg-black"
      : path === "faq"
      ? "bg-sea-white-200"
      : path === "about"
      ? "bg-[#F2EDD8]"
      : "bg-transparent";

  const text_color = dark ? "text-white" : " text-sea-red-400";

  return (
    <div
      className={`${dark && "border-gray-500"} lg:border-t  py-5 px-4 ${
        hide ? "hidden" : "block"
      } ${bg_color} ${text_color}`}
    >
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full flex  justify-start items-center xl:px-20  lg:border-none border-b  md:pb-10 pb-5 lg:pt-10 mb:pt-5">
            <img
              className="mr-5 "
              src={dark ? largeLogoWhite : largeLogo}
              alt=""
            />
            <div className="md:block hidden">
              <p className="text-xl pl-1 pb-1">#EnterTheMyst</p>
              <p>© 2023 PROJECT SEA</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center gap-4 lg:items-end items-start xl:px-20 md:border-none border-b  md:py-10 py-5">
            <ul className="flex lg:flex-row flex-col  lg:gap-8 gap-2 text-lg">
              <li>
                <Link to="/termsandcondition">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
            <ul className="flex items-center justify-between xl:gap-6 gap-3">
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/projectsea_io"
                  rel="noreferrer"
                >
                  <img src={dark ? twitterWhite : twitter} alt="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://discord.gg/projectsea"
                  rel="noreferrer"
                >
                  <img src={dark ? DiscordWhite : Discord} alt="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://instagram.com/projectsea_io"
                  rel="noreferrer"
                >
                  <img src={dark ? InstagramWhite : Instagram} alt="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@projectsea_io"
                  rel="noreferrer"
                >
                  <img src={dark ? tiktokWhite : tiktok} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden py-5">
            <p>© 2023 PROJECT SEA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

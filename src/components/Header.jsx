import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import closeIcon from "../assets/images/close-icon.png";
import discord_dark from "../assets/images/discord-dark.png";
import DiscordWhite from "../assets/images/discord-white.png";
import Discord from "../assets/images/Discord.png";
import instagram_dark from "../assets/images/instagram-dark.png";
import InstagramWhite from "../assets/images/instagram-white.png";
import Instagram from "../assets/images/Instagram.png";
import logoWhite from "../assets/images/logo-white.png";
import logo from "../assets/images/logo.png";
import openIcon from "../assets/images/open-icon.png";
import openWhiteIcon from "../assets/images/open-white-icon.png";
import tiktok_dark from "../assets/images/tiktok-dark.png";
import tiktokWhite from "../assets/images/tiktok-white.png";
import tiktok from "../assets/images/tiktok.png";
import twitter_dark from "../assets/images/twitter-dark.png";
import twitterWhite from "../assets/images/twitter-white.png";
import twitter from "../assets/images/Twitter.png";
import { useGallaryFilter } from "../context/gallaryContext";

export default function Header() {
  const [lg, setLg] = useState(
    window.matchMedia("(max-width: 1023px)").matches
  );
  const [hide, setHide] = useState(lg ? true : false);

  const { extendFilter, filter } = useGallaryFilter();

  const { pathname } = useLocation();

  const path = pathname.replace("/", "");

  const dark = path === "roadmap";

  const navItems = [
    {
      id: 0,
      value: "about",
      path: "about",
    },
    {
      id: 1,
      value: "vision",
      path: "roadmap",
    },
    {
      id: 2,
      value: "questions?",
      path: "faq",
    },

    {
      id: 7,
      value: "twitter",
      path: "https://twitter.com/projectsea_io",
      image: twitter_dark,
    },
    {
      id: 8,
      value: "discord",
      path: "https://discord.gg/projectsea",
      image: discord_dark,
    },
    {
      id: 9,
      value: "instagram",
      path: "https://instagram.com/projectsea_io",
      image: instagram_dark,
    },
    {
      id: 6,
      value: "tiktok",
      path: "https://www.tiktok.com/@projectsea_io",
      image: tiktok_dark,
    },
  ];

  useEffect(() => {
    if (lg) {
      setHide(true);
    }
  }, [pathname]);

  useEffect(() => {
    window.matchMedia("(max-width: 1023px)").addEventListener("change", (e) => {
      setLg(e.matches);
      setHide(e.matches);
    });
  }, []);

  return (
    <nav
      className={`w-full border-gray-200 px-4 py-2.5 ${
        filter ? "z-0" : "z-30"
      } fixed top-0 left-0 right-0 transition-all `}
    >
      {/* black layer for mobile nav */}
      <div
        onClick={() => {
          setHide(true);
        }}
        className={`${
          hide ? "opacity-0 invisible" : "opacity-50"
        } w-screen h-screen bg-black lg:hidden  fixed top-0 left-0 ring-0 bottom-0 z-30 transition ease-in-out duration-300`}
      ></div>

      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Logo Ans Social Accounts */}
        <div className="flex items-center xl:gap-6 gap-3">
          <Link to="/home" className="flex items-center mr-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              <img src={dark ? logoWhite : logo} alt="" />
            </span>
          </Link>
          <ul className="md:flex hidden items-center justify-between xl:gap-6 gap-3">
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

        <div className="flex items-center ml-0">
          <div className="flex gap-4 justify-between items-center">
            {/* This for Discover Pages Mobile Filter open */}
            {path === "gallery" && (
              <button className="lg:hidden" onClick={extendFilter}>
                <p className="text-red-400 text-2xl font-space-mono">
                  Filters (0)
                </p>
              </button>
            )}
            <button
              onClick={() => {
                setHide(false);
              }}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   z-10 order-1"
            >
              <img src={dark ? openWhiteIcon : openIcon} alt="" />
            </button>
          </div>

          {/* Mobiler Navbar */}
          <div
            className={`lg:w-auto md:w-5/12 sm:w-1/2 w-10/12 lg:h-auto h-screen lg:overflow-y-auto overflow-y-scroll lg:static fixed lg:bg-transparent bg-white right-0 top-0 px-4 lg:pt-0 py-2.5 transition-transform lg:z-0 z-40 ${
              hide ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <img
                onClick={() => {
                  setHide(true);
                }}
                src={closeIcon}
                alt=""
              />
            </div>
            <ul
              className={`flex lg:font-space-mono flex-col lg:items-center items-start lg:bg-transparent rounded-lg  lg:flex-row lg:mt-0  ${
                dark
                  ? "lg:text-white text-black "
                  : "lg:text-sea-red-400 text-black"
              }`}
            >
              {navItems.map((nav) =>
                nav.image ? (
                  <li
                    onClick={() => {}}
                    key={nav.id}
                    className="lg:text-sm xl:text-base lg:font-medium order-2 w-full md:hidden flex justify-between items-center  z-10  text-2xl uppercase border-b lg:py-2 py-4 xl:px-5 lg:px-3 "
                  >
                    <a
                      href={nav.path}
                      target="_blank"
                      className=" block   rounded  lg:border-0  lg:p-0 "
                      rel="noreferrer"
                    >
                      {nav.value}
                    </a>
                    <img src={nav.image} alt="" />
                  </li>
                ) : (
                  <li
                    key={nav.id}
                    className={`lg:text-sm xl:text-base lg:font-medium order-2 flex w-full  z-10 text-2xl  lg:capitalize uppercase lg:rounded-3xl lg:border-0 border-b lg:py-2 py-4  xl:px-5 lg:px-3  ${
                      nav.path === path &&
                      "lg:bg-sea-red-400 lg:text-white text-red-400"
                    }`}
                  >
                    <Link
                      to={`/${nav.path}`}
                      className=" block whitespace-nowrap rounded  lg:border-0  lg:p-0 "
                    >
                      {nav.value}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <p className="text-gray-400 py-4 lg:hidden">© 2023 PROJECT SEA</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

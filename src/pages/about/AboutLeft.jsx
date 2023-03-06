import React from "react";
import xtoguro from "../../assets/images/0xtoguro-coreteam.png";
import ros from "../../assets/images/1ros_e-coreteam.png";
import ghostiee from "../../assets/images/ghostiee_coreteam.png";
import hotairbaboon from "../../assets/images/hotairbaboon-coreteam.png";
import oldkneechan from "../../assets/images/oldkneechan-coreteam.png";
import redradradish from "../../assets/images/redradradish-coreteam.png";
import spod3r from "../../assets/images/spod3r-coreteam.png";
import LeftItem from "./LeftItem";

export default function AboutLeft() {
  return (
    <div className=" py-20">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h2 className="text-sea-red-400 uppercase max-w-2xl mb-8 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl ">
          About
        </h2>
        <p className="max-w-2xl mb-6 font-slab lg:mb-8 md:text-lg lg:text-xl text-sea-natural-600">
          PROJECT SEA is forged at the crossroads of web3, brand-building, and a
          deep appreciation for all things cultural. Narrative-driven,
          community-focused web3 brand that starts with a collection of
          culturally-injected citizens that welcome you into Hawker Street. An
          open, yet private hangout spot where we’ll spill the tea on exclusive
          physical drops, experiences, and more.
        </p>
      </div>
      <div className=" mb-8 mt-20 max-w-screen-sm lg:mb-16">
        <h2 className="text-sea-red-400 mb-4 text-5xl text-start tracking-tight uppercase">
          Meet the team
        </h2>
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        <LeftItem
          img={ros}
          name="1ros"
          role="Project Manager"
          desc="Tech enthusiast. Almost every night I listen to dubstep to sleep.
            When life throws thorns, hunt for roses."
        />
        <LeftItem
          img={redradradish}
          name="Redradradish"
          role="Artist"
          desc="Award winning cat whisperer and certified dog petter. I draw
          sometimes."
        />{" "}
        <LeftItem
          img={spod3r}
          name="spod3r"
          role="Designer"
          desc="I design experiences on the web. In an endless state of learning. I
          love Chinese tea."
        />{" "}
        <LeftItem
          img={oldkneechan}
          name="oldkneechan"
          role="Growth"
          desc="Your internet older brother. Lover of good food, good memes and good aesthethiccs."
        />{" "}
        <LeftItem
          img={hotairbaboon}
          name="HotAirBaboon"
          role="Growth"
          desc="Content creator and agency founder who has an unhealthy obsession for Star Wars.
          He wouldn't Force anyone to watch it though...
          "
        />{" "}
        <LeftItem
          img={xtoguro}
          name="0xToguro"
          role="Backend Dev"
          desc="When Quinn from “Diary of a Wimpy Kid” suggest to marry ice cream if you really love it, I felt that.
          "
        />{" "}
        <LeftItem
          img={ghostiee}
          name="Ghostiee"
          role="Community Manager"
          desc="Certified coffee junkie by day, dota2 noob by night. I like magical internet money."
        />{" "}
      </div>

      <h2 className="text-sea-red-400 mb-4 text-5xl text-start tracking-tight uppercase mt-20">
        UNITY IS STRENGTH
      </h2>
      <p className="max-w-2xl mb-6 font-slab lg:mb-8 md:text-lg lg:text-xl text-sea-natural-600">
        Alone, we are curious. Together, we are unstoppable. A community of
        curious minds, innovative spirits, and collaborative hearts, all
        striving to build a decentralized future that empowers individuals.
        <span className="text-sea-red-400"> #EnterTheMyst</span>
      </p>
    </div>
  );
}

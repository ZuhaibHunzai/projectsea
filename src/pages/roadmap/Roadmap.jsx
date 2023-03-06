import React, { useEffect, useState } from "react";
import vision1 from "../../assets/images/vision-1.png";
import vision10 from "../../assets/images/vision-10.png";
import vision11 from "../../assets/images/vision-11.png";
import vision2 from "../../assets/images/vision-2.png";
import vision3 from "../../assets/images/vision-3.png";
import vision4Large from "../../assets/images/vision-4-large.png";
import vision4 from "../../assets/images/vision-4.png";
import vision5 from "../../assets/images/vision-5.png";
import vision6 from "../../assets/images/vision-6.png";
import vision7 from "../../assets/images/vision-7.png";
import vision8Large from "../../assets/images/vision-8-large.png";
import vision8 from "../../assets/images/vision-8.png";
import vision9 from "../../assets/images/vision-9.png";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer";
import Box from "./Box";

export default function Roadmap() {
  const [lg, setLg] = useState(
    window.matchMedia("(max-width: 1023px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width:1023px)")
      .addEventListener("change", (e) => setLg(e.matches));
  }, []);
  return (
    <AnimatedPage>
      <div className=" px-4 bg-black lg:pb-40 md:pb-60 pb-10 relative before:absolute before:right-0 before:top-0 before:content-[''] before:bg-[url('/src/assets/images/smoke-2.png')] before:w-full before:h-full before:bg-no-repeat 2xl:before:bg-right-top before:bg-left-top before:opacity-30 z-0 before:-z-10">
        <div className="container mx-auto">
          <div className={`px-4 pt-40 pb-20`}>
            <div className="align-middle text-center">
              <div>
                <h4 className="xl:w-3/6 lg:w-4/6 sm:w-5/6 w-full lg:text-4xl text-3xl mx-auto text-white text-start uppercase">
                  A grand goal of crafting unique experiences and memorabilia
                  that you’ll cherish and hold dear. We invite and welcome you
                  with open arms (and a glass of ginger tea) to create that
                  legacy with us. Everyone is going to need a compelling
                  grandfather’s story to tell your kids, so join us as we craft
                  that story together.
                </h4>
              </div>
            </div>
          </div>

          <div className=" w-full text-center py-10">
            <h2 className="text-sea-red-500 xl:text-10xl md:text-9xl text-8xl uppercase mb-10">
              The Myst
            </h2>
            <h4 className="xl:w-3/6 lg:w-4/6 sm:w-5/6 w-full lg:text-3xl text-2xl mx-auto text-white text-start uppercase">
              In our world, the Myst is our essence and can take on many forms.
              It powers us, shields us and guides us. What else does the Myst
              hold in store for us?
            </h4>
          </div>

          {/* 1st section */}
          <div className="flex md:flex-row-reverse flex-col md:gap-0 gap-10 py-10">
            <div className="md:w-1/2 w-full flex justify-center  ">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision1}
                  number={"01"}
                  title={"Art Reveal"}
                  text={
                    "Our very first step in the greater web3 vision, our first production will unveil culturally-injected citizens. Each overflowing with vibrant personality; every little detail hand-painted meticulously. Peep the intricate motifs and see for yourself."
                  }
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center bg-blend-soft-light lg:mt-40 md:mt-20">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision2}
                  number={"02"}
                  title={"Streetwear"}
                  text={
                    "We're sick and tired of those panda air f*rces. We think it is time to add another brand to your wardrobe. Get excited for partnerships and for us to work with the most talented artists to produce exclusive branded streetwear for the community."
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="lg:mt-64 md:mt-20 h-auto block">
              <div className="xl:w-2x96 lg:w-[40rem] w-full xl:h-96 md:h-80 h-auto flex md:gap-0 gap-10 md:flex-row flex-col lg:justify-start justify-around md:items-start items-center lg:relative z-10 xl:ml-40 lg:ml-20 ">
                {/* 3rd */}
                <div className="w-full flex justify-center">
                  <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 lg:absolute xl:-right-28 lg:-right-20 xl:-top-80 lg:-top-64  z-30 lg:mb-0 md:mb-40">
                    <Box
                      bg={vision3}
                      number={"03"}
                      title={"events"}
                      text={
                        "Where will we make our first physical appearance? Look forward to community meet-ups, exhibits where we spotlight amazing art, dope music festivals, and much much more."
                      }
                    />
                  </div>
                </div>
                {/* 4th */}
                <div className="w-full flex justify-center">
                  <div className="group xl:w-2x96 lg:w-[40rem] md:w-80 w-96  xl:h-96 md:h-80 h-96  rounded-3xl bg-opacity-50 lg:mt-0 md:mt-40">
                    <Box
                      bg={lg ? vision4 : vision4Large}
                      number={"04"}
                      title={"collectibles"}
                      text={
                        "Nothing is off the table for us when we think collectibles. They’re going to be physical one-of-a-kind collectibles to trade or show-off. Do what you like, but know that it’s going to be rare and absolutely fire. Who knows, we might just do capsule toys?"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd section */}
          <div className=" w-full h-40 flex justify-center items-center md:mb-10 md:mt-40 mt-5">
            <h4 className="text-sea-red-500 xl:text-10xl md:text-9xl text-8xl uppercase">
              Fire
            </h4>
            <div className=" flex flex-col justify-between  xl:h-36 md:h-32 h-24 xl:pt-3 md:pt-3.5 pt-2 pb-2  text-sea-red-500 uppercase xl:text-4xl md:text-3xl text-xl">
              <h4>OUR PEOPLE,</h4>
              <h4>OUR Fire,</h4>
              <h4>OUR Fuel,</h4>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col md:gap-0 gap-10 py-10">
            <div className="md:w-1/2 w-full flex  justify-center  ">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision5}
                  number={"05"}
                  title={"core team"}
                  text={
                    "The team will be re-investing royalties into expanding the Core Team with talented individuals to ramp up development."
                  }
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center bg-blend-soft-light lg:mt-40 md:mt-20">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision6}
                  number={"06"}
                  title={"moderation"}
                  text={
                    "Mods are the backbone of PROJECT SEA. They are the flame that burns 24/7, helping to protect, grow and maintain our community. They work hard every day to make sure everything runs smoothly and ensuring we continue to have a safe space. Choosing the right mods who share the same values mean everything to us."
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="lg:mt-64 md:mt-20 h-auto block">
              <div className="xl:w-2x96 lg:w-[40rem] w-full xl:h-96 md:h-80 h-auto flex md:gap-0 gap-10 md:flex-row flex-col lg:justify-start justify-around md:items-start items-center lg:relative z-10 xl:ml-40 lg:ml-20 ">
                {/* 3rd */}
                <div className="w-full flex justify-center">
                  <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 lg:absolute xl:-right-28 lg:-right-20 xl:-top-80 lg:-top-64  z-30 lg:mb-0 md:mb-40">
                    <Box
                      bg={vision7}
                      number={"07"}
                      title={"community spaces"}
                      text={
                        "For us, community comes first. And we’ll always have a seat and hot drink for you at the table for everyone who wants to hang out and discuss what is important in this world. From trivial meaningless debates to serious worldly topics. Your fiery passion and support for PROJECT SEA will be what fuels us to keep pushing onto new frontiers."
                      }
                    />
                  </div>
                </div>
                {/* 4th */}
                <div className="w-full flex justify-center">
                  <div className="group xl:w-2x96 lg:w-[40rem] md:w-80 w-96  xl:h-96 md:h-80 h-96  rounded-3xl bg-opacity-50 lg:mt-0 md:mt-40">
                    <Box
                      bg={lg ? vision8 : vision8Large}
                      number={"08"}
                      title={"wok-hey!"}
                      text={
                        "Food is arguably the most integral part of our culture. And as huge appreciators of culture and cuisine, we’re excited to push the limits to bridge the culinary world with the metaverse. By the way, did you know that oldkneechan’s was a very talented masterchef and his goal is to open a bar/restaurant."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd section */}
          <div className=" w-full text-center lg:pt-20 md:pt-60 pt-20 pb-10">
            <h2 className="text-sea-red-500 xl:text-10xl md:text-9xl text-8xl uppercase mb-10">
              The Path
            </h2>
            <h4 className="xl:w-3/6 lg:w-4/6 sm:w-5/6 w-full lg:text-3xl text-2xl mx-auto text-white text-start uppercase">
              Hang out with us at Hawker Street as the myst slowly subsides. A
              clearer path will reveal itself soon...
            </h4>
          </div>
          <div className="flex md:flex-row-reverse flex-col md:gap-0 gap-10 py-10">
            <div className="md:w-1/2 w-full flex  justify-center  ">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision9}
                  number={"09"}
                  title={"DAO/Tokenization"}
                  text={
                    "PROJECT SEA believes in a community that can collectively make decisions using a transparent and decentralized system. We are paying attention to any necessary improvements along the way to ensure it become common practices within our community."
                  }
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center bg-blend-soft-light lg:mt-40 md:mt-20">
              <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 ">
                <Box
                  bg={vision10}
                  number={"10"}
                  title={"metaverse"}
                  text={
                    "The metaverse is often seen as the next step in the evolution of the internet, as it allows for more immersive and interactive experiences than traditional online platforms. The metaverse is expected to be a major growth area in the coming years and many companies and we are working on creating the technologies and platforms that will make it a reality."
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="lg:mt-64 md:mt-20 h-auto block">
              <div className="xl:w-2x96 lg:w-[40rem] w-full xl:h-96 md:h-80 h-auto flex md:gap-0 gap-10 md:flex-row flex-col lg:justify-start justify-around md:items-start items-center lg:relative z-10 xl:ml-40 lg:ml-20 ">
                {/* 3rd */}
                <div className="w-full flex justify-center">
                  <div className="xl:w-96 md:w-80 w-96 xl:h-96 md:h-80 h-96 lg:absolute xl:-right-28 lg:-right-20 xl:-top-80 lg:-top-64  z-30 lg:mb-0 md:mb-40">
                    <Box
                      bg={vision11}
                      number={"11"}
                      title={"gaming"}
                      text={
                        "Building a truly great game that appeals to a wide audience and can scale is a challenging task, and requires a team with both the experience and expertise to do so. We have an eye on partnering up with a well-established game dev around the area. This is something we are all excited about..."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-5xl lg:mt-0 mt-10 uppercase text-center">
            #EntertheMyst
          </h2>
        </div>
      </div>

      <Footer />
    </AnimatedPage>
  );
}

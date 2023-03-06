import faqMockup from "../../assets/images/QUESTIONS-NFT.png";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer";
import { data } from "./data.js";
import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <AnimatedPage>
      <div
        className={`z-20 relative w-screen bg-sea-white-200 lg:h-screen h-auto overflow-hidden  lg:bg-[url('/src/assets/images/smoke-3.png')] bg-no-repeat bg-cover bg-right-top px-4`}
      >
        <div className="container mx-auto w-full h-full">
          <div className="w-full h-full grid mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className=" lg:pt-52 pt-40 mr-auto w-full h-full place-self-center lg:col-span-7 overflow-y-scroll scrollbar-hidden">
              <h2 className="uppercase text-sea-red-400 max-w-2xl mb-8 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Faqs
              </h2>

              <div className="w-full mb-40">
                {data.map((item) => (
                  <FaqItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-end lg:mt-0 lg:col-span-5 max-h-screen">
              <img src={faqMockup} alt="mockup" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}

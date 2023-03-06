import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer";
import { termsData } from "./termsData";

export default function TermsAndCondition() {
  return (
    <AnimatedPage>
      <div className="font-space-mono px-4">
        <div className="bg-basewhite text-center pt-40 pb-10">
          <div className="container mx-auto">
            <h1 className="text-6xl text-sea-red-400 uppercase font-bold mb-5">
              Terms & Conditions
            </h1>
            <p className="text-left py-4">
              {" "}
              By using the platform, website and services, you agree to be bound
              by these terms and conditions and our privacy policy. In these
              terms and conditions, the words "platform" and "website" refers to
              the PSEA website, "we", "us", "our" and "PSEA" refers to Project
              SEA and "user" "you" and “your" refers to you, the user of PSEA.
              The following terms and conditions apply to the platform, website
              and services offered by PSEA. This includes the mobile and tablet
              versions as well as any other version of PSEA accessible via
              desktop, mobile, tablet, social media or other devices.
            </p>

            <div className="text-left">
              {termsData.map((item) => (
                <div key={item.id}>
                  <h4 className="font-bold text-lg text-black py-5">
                    {item.id}. {item.title}
                  </h4>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div className="py-4">${item.description}</div>`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}

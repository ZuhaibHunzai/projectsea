import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer";
import { privacyData } from "./privacyData";

export default function PrivacyPolicy() {
  return (
    <AnimatedPage>
      <div className="font-space-mono px-4">
        <div className="bg-basewhite text-center pt-40 pb-10">
          <div className="container mx-auto">
            <h1 className="text-6xl text-sea-red-400 uppercase font-bold mb-5">
              Privacy Policy
            </h1>
            <p className="text-left py-4">
              <p className="text-left py-4">
                PSEA values your privacy and the protection of your personal
                data. This privacy policy describes what information we collect
                from you, how we collect it, how we use it, how we obtain your
                consent, how long we keep it in our databases and, if necessary,
                with whom we share it.
              </p>
            </p>
            <p className="text-left py-4">
              By using the website and services, you are accepting the practices
              described in this privacy policy. Use of the website and services
              is also subject to our terms and conditions. In this privacy
              policy the words "platform" and "website" refers to the PSEA
              website, "we", "us", "our" and "PSEA" refers to Project SEA and
              "user" "you" and “your" refers to you, the user of PSEA.
            </p>{" "}
            <p className="text-left py-4">
              This privacy policy may change from time to time. Your continued
              use of the website and services after we make changes is deemed to
              be acceptance of those changes, so please check the policy
              periodically for updates. This privacy policy has been developed
              and is maintained in accordance with all applicable national and
              international laws and regulations and specifically with the
              California Consumer Privacy Act (CCPA), the General Data
              Protection Regulation (GDPR - European Regulations) and the
              Personal Data Protection Act (PDPA - Singapore and Malaysia
              regulations).
            </p>
            <div className="text-left">
              {privacyData.map((item) => (
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

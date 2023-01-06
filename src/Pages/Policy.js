import React from "react";
import Footer from "../Components/Footer";
import "./Policy.css";
import Header from "../Components/Header";

function policy() {
  return (
    <>
    <div  className="Policy_content">
    <div className="Poilcy_header">
        <Header />
      </div>
      <div className="policy_container">
        <h3>Wix.com Privacy Policy</h3>
        <hr />
        <div className="policy_wrapper">
          <p>
            To provide you the Services, we must collect Personal Information
            relating to an identified or identifiable natural person (“Personal
            Information”). We collect Personal Information you provide us, from
            your use of the Services, and from other sources. Here are the types
            of Personal Information we collect about you:
          </p>
          <ol>
            <li>
              When you register for our Services, purchase and/or register
              domain names, use any of our Services; and/or when you contact us
              directly by any communication channel (e.g., Wix’s support
              tickets, emails), you may provide us Personal Information, such as
              name, email address, phone number, payment information (for Users
              with Paid Services), information you include in your
              communications with us and with other users on our platform, and
              Personal Information contained in scanned identification documents
              (such as an ID card, driver’s license, passport, or official
              company registration documents).
            </li>
            <li>
              We may receive Personal Information about you from third-party
              sources, such as i security providers , fraud detection and
              prevention providers for example to help us screen out users
              associated with fraud, iisocial media platforms, when you log-in
              or sign-up using your social media account, we may receive
              Personal Information from that service (e.g., your username, basic
              profile Personal Information) and in some cases, we may collect
              Personal Information from lead enhancement companies which help us
              to improve our service offering; iii advertising and marketing
              partners in order to monitor, manage and measure our ad campaigns.
            </li>
            <li>
              When you visit, download, and/or use any of our Services, we may
              collect aggregated usage Personal Information, such as Visitors’
              and Users’ browsing and ‘click-stream’ activity on the Services,
              session heatmaps and scrolls, non-identifying Personal Information
              regarding the Visitor’s or User’s device, operating system,
              internet browser, screen resolution, language and keyboard
              settings, internet service provider, referring/exit pages,
              date/time stamps, etc
            </li>
          </ol>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default policy;

import React from "react";
import "./Terms.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function Terms() {
  return (
    <>
      <div className="Terms_container">
        <div>
          <Header />
        </div>
        <div className="terms_heading">
          <h3>Wix.com Terms of Use</h3>
          <hr />
          <p>
            Below we have listed important legal terms that apply to anyone who
            visits our website or uses our services. These terms are necessary
            in order to protect both you and us and to make our services
            possible and more enjoyable for everyone. Wix offers a wide range of
            services and features and part of the terms below may not be
            relevant to the specific services you use.
          </p>
          <div className="terms_data">
            <div className="terms_para">
              <ol>
                <li>
                  fully comply with all applicable laws and any other
                  contractual terms which govern your use of the Wix Services
                  (and any related interaction or transaction), including those
                  specific laws applicable to you or your End Users in any of
                  your geographical locations
                </li>
                <li>
                  ​ We understand that legal terms can be exThe Wix Terms
                  constitute a binding and enforceable legal contract between
                  Wix.com Ltd. and its affiliated companies and subsidiaries
                  worldwide (“Wix”, “us” or “we”) and you in relation to the use
                  of any Wix Services - so please read them carefully.hausting
                  to read, and we’ve tried to make the experience more pleasant.
                </li>
                <li>
                  you are not ordinarily resident of, and will not use or
                  distribute the Wix Services or Wix App in, any country or
                  region subject to U.S. comprehensive country or regional
                  embargos. You further confirm that you are not included on any
                  sanctions list, including without limitation, the U.S.
                  Specially Designated Nationals and Blocked Persons List,
                  maintained by the U.S. (“SDN List”), or any other applicable
                  sanctions list maintained by the EU, the UK or other, and that
                  you are not owned 50 percent or more, directly or indirectly
                  in the aggregate, by a Sanctioned Party and are not otherwise
                  controlled by such a party (“Sanctioned Party”). You further
                  confirm that you will not use or distribute the Wix Services
                  or the Wix App directly or indirectly to or for the benefit of
                  a Sanctioned Party. You agree to indemnify Wix against any and
                  all losses, including without limitation, monetary penalties
                  and legal fees, that Wix may suffer should you violate any of
                  the forgoing confirmations regarding your non-sanctioned
                  status.
                </li>
              </ol>
            </div>
            <div className=" terms_speacial">
              <h3>#ItsThatEasy</h3>
              <p>
                You can create an account and purchase services also via a
                third-party authorized to sell Wix (Reseller). If you register
                to Wix or purchase services via a Reseller you agree and accept
                these Wix terms of use (in addition to any arrangement between
                you and the Reseller), so that in you relationship with Wix
                these terms will overcome any other terms, and that some Wix
                services and features may not be available to you or be
                available to you only through the Reseller platform.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Terms;

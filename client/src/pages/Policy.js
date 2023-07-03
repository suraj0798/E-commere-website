import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Practically every single website worth anything out there has a
            Privacy Policy page that it can turn to whenever issues about
            privacy come up with users. That's why you really need to have a
            privacy policy, but it's not exactly that easy to make one, not if
            you really want to cover all of your bases. This is why you may want
            to look into the matter of privacy policy template generator (like
            ours here!) since it comes with quite a few benefits. A privacy
            policy is a legal document that details how a website gathers,
            stores, shares, and sells data about its visitors. This data
            typically includes items such as a user's name, address, birthday,
            marital status, medical history, and consumer behavior. The specific
            contents of a privacy policy document depend upon the laws in the
            legal jurisdiction in which your business operates. Most countries
            have their own set of guidelines regarding what information is
            eligible for collection, and how that information may be used.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

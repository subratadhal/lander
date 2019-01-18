import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Navigation extends Component {
  state = {
    tabID: ""
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onClick = e => {
    var elmnt = document.getElementById("navigation");
    var y = elmnt.offsetTop;
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth'
    });

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      this.setState({
        tabID: ""
      });
    } else {
      var x = document.getElementsByClassName("nav-link");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
      e.target.classList.add("active");
      this.setState({
        tabID: e.target.id
      });
    }
  };
  render() {
    const tabID = this.state.tabID;
    return (
      <div className="navigation" id="navigation">
        <Container ref={this.myRef}>
          <Row>
            <Col xs="12">
              <Nav>
                <NavItem>
                  <NavLink
                    href="#"
                    className=""
                    id="termandcondition"
                    onClick={this.onClick}
                  >
                    TERMS & CONDITIONS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" id="leadinggoals" onClick={this.onClick}>
                    {" "}
                    LENDING GOALS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" id="loanratefees" onClick={this.onClick}>
                    LOAN RATES & FEES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" id="privacypolicy" onClick={this.onClick}>
                    PRIVACY POLICY{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/unsubscribe"
                    id="unsubscribe"
                    onClick={this.onClick}
                  >
                    UNSUBSCRIBE
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="12" className="cms-content">
              {tabID === "leadinggoals" ? (
                <article>
                  <h2 className="pad30">Lending Goals</h2>
                  <p>
                    FastLoanAdvance works hard to protect consumers like you
                    from unfair and illegal practices in the personal loan
                    industry. In an effort to assist us in this goal of
                    protecting you and helping you make an informed decision
                    regarding personal loans, we offer the following code of
                    conduct.
                  </p>
                  <ul>
                    <li>
                      We make sure that all of our customers are well informed
                      about the process of borrowing money, about their
                      responsibilities as borrowers and about the repercussions
                      of failing to pay money back on time.
                    </li>
                    <li>
                      We provide clear and transparent information to our
                      customers and treat them with courtesy and respect.
                    </li>
                    <li>
                      We hold ourselves to a high standard of service and
                      customer satisfaction.
                    </li>
                    <li>
                      We ensure that each lender or lending partner we work with
                      is reputable and follows responsible lending practices.
                    </li>
                  </ul>
                  <h4>Lenders and Lending Partners</h4>

                  <p>
                    Here at FastLoanAdvance, we make every effort to ensure that
                    we work only with responsible lenders or lending partners
                    who are authorized to lend cash to consumers in the form of
                    personal / installment loans. Once you are connected with
                    your lender or lending partner, we recommend that you look
                    up the specific details on that company so that you know how
                    to get in contact with them in case you have any questions
                    or concerns. Each lender or lending partner also has their
                    own terms and conditions in regards to interest rates, the
                    requirements on repayment and the repercussions of being
                    late on a payment, missing a payment or rolling over a
                    payment. You should be sure to be aware of these specific
                    terms and conditions.
                  </p>

                  <h4>Your Credit Score</h4>

                  <p>
                    One of the first and most important things to understand as
                    a borrower is that being late on a payment, missing a
                    payment or rolling over a payment may negatively impact your
                    credit score. Your credit score is a numerical expression of
                    your credit worthiness based on an analysis of your credit
                    files. A credit score is primarily based on credit report
                    information typically sourced from credit bureaus. Failing
                    to pay on time may negatively affect this score and make it
                    harder for you to do things like take out a credit card or
                    get a loan. While less than perfect credit will not
                    necessarily prevent you from being able to receive a loan,
                    all loans are subject to credit approval. As such, the
                    lender or lending partner that you are connected with may
                    run a credit check with one or more credit agency. If you
                    have had many credit checks in a given period of time, it is
                    possible that this check may negatively affect your credit
                    score. But, if you are able to make all of your payments on
                    time, the process of taking out and repaying a loan may
                    improve your credit score.
                  </p>

                  <h4>Late Payments</h4>

                  <p>
                    The most important thing that you must understand as a
                    borrower is the repercussions of making late payments on
                    your loan. Although each lender or lending partner that we
                    work with has its own terms and conditions for the loan and
                    the repayment of the loan, there are some general
                    repercussions that it is important for you to understand.
                    There will likely be charges for making a late payment.
                    Similarly, if you are extending a loan, the finance charge
                    for the original loan must be paid on the original due date.
                    Then your loan principal will be deferred with an additional
                    finance charge. We recommend paying as much as possible
                    towards your original due date in order to further reduce
                    the charges you incur. If you plan to deviate from your
                    payment plan, you should contact your lender or lending
                    partner immediately to setup a new payment arrangement. If
                    your loan payment is rejected for any reason by your bank,
                    the lender or lending partner may initiate collection
                    procedures and you will be prevented from receiving future
                    loans from the lender or lending partner until all of your
                    payment obligations are met in full. The most important
                    thing to remember is to read about the payment options and
                    penalties for the specific lender or lending partner that
                    you are connected with and to make sure that you fully
                    understand these policies. Lastly, remember that personal
                    loans should be used only for short-term financial needs.
                    They are not a long-term financial solution. In general you
                    should always make sure to pay all of your outstanding
                    loans/bills/debts on time.
                  </p>

                  <h4>Missing a Payment</h4>

                  <p>
                    FastLoanAdvance strongly recommends that you pay all of your
                    outstanding debt/loans/bills when they are due. This will
                    ensure that you will have a good payment record and minimize
                    negative repercussions. Each lender or lending partner that
                    FastLoanAdvance works with has their own terms and
                    conditions governing the specific implications of missing a
                    payment. However, if the lender or lending partner does not
                    receive a payment the likely result is that the lender or
                    lending partner will begin collection procedures against you
                    and you will no longer be able to receive any more loans
                    from the lender or lending partner. Therefore, it is
                    important for you to both understand the specific
                    requirements for repayment and the repercussions of missing
                    a payment. And, again we strongly urge you to pay all
                    outstanding debts/loans/bills on time.
                  </p>

                  <h4>Rolling Over a Payment</h4>

                  <p>
                    With some lenders or lending partners, it may be possible to
                    roll over payments if you are unable to make a payment date.
                    However, please note that, just like missing a payment or
                    being late on a payment, this will have a negative effect on
                    your credit score. Also, it is important to know that the
                    interest that you pay will be the same with the rolled-over
                    payment as with the missed payment.
                  </p>
                  <h4>Types of Renewal Policies</h4>

                  <p>
                    FastLoanAdvance works with a number of different lenders and
                    lending partners, each of which has its own unique renewal
                    policy. However, as a general rule there are two different
                    kinds of renewals:
                  </p>
                  <ol>
                    <li>
                      Unlimited renewals. These allow you to continuously renew
                      and are the most risky for borrowers.
                    </li>
                    <li>
                      Automatic and borrower-initiated renewals. These forms of
                      renewals are not unlimited and are subject to time limits.
                    </li>
                  </ol>
                  <p>
                    It is important to understand that once a loan can no longer
                    be renewed by a borrower, the lender or lending partner will
                    have to begin a collection process to recover the amount
                    owed. Each lender or lending partner will have its own
                    specific policy, so it is important that you read and
                    understand that policy.
                  </p>
                  <h4>Collection</h4>

                  <p>
                    If you miss a payment on your loan and do not contact the
                    lender or lending partner to discuss other repayment
                    options, it is likely that your loan will be subject to
                    collections. You will normally be contacted via phone, email
                    and regular mail. If you continue to not respond, they will
                    most likely use an external collections agency to collect
                    the debt. These specifics will vary by the specific lender
                    or lending partner, so it is important that you be sure to
                    read and understand your specific loan’s terms and
                    conditions. You may be able to have funds withdrawn
                    automatically from your bank account on the date agreed upon
                    with your lender or lending partner. Be sure that you read
                    and fully understand all of your lender or lending partner's
                    policies regarding repayment and understand what you will
                    have to do as a borrower to repay the loan. Your loan can
                    not be conditioned upon repayment by electronic funds
                    transfer or automatic withdrawal. Consult your lender or
                    lending partner for more details.
                  </p>
                </article>
              ) : (
                  ""
                )}
              {tabID === "loanratefees" ? (
                <article>
                  <h2 className="pad30">Rates & Fees</h2>
                  <p>
                    Only a lender or lending partner can provide you with
                    information on their rates and terms. This will typically
                    happen shortly after your loan request is complete, and you
                    are connected with a lender or lending partner.
                    FastLoanAdvance does not make credit decisions or determine
                    rates and terms. Remember, you are under no obligation to
                    accept the loan offer if the terms are not satisfactory for
                    whatever reason.
                  </p>

                  <h4>Repayment</h4>

                  <p>
                    Repayment on personal loans is generally performed either
                    monthly or once every two weeks, depending either on your
                    preferences or your lender's or lending partner’s terms. You
                    may be able to have funds withdrawn automatically from your
                    bank account on the date agreed upon with your lender or
                    lending partner. Be sure that you read and fully understand
                    all policies regarding repayment and understand what you
                    will have to do as a borrower to repay the loan. Your loan
                    cannot be conditioned upon repayment by electronic funds
                    transfer or automatic withdrawal. Consult your lender or
                    lending partner for more details.
                  </p>

                  <h4>Personal Loan Costs</h4>

                  <p>
                    On the whole, the eventual cost of a personal loan will vary
                    a great deal based on factors related to the requester, the
                    state the requester lives in, the lender or lending partner,
                    and the requester's repayment. Other factors that matter are
                    the amount of money that is borrowed, the period of time of
                    the loan and the specific interest rates used. Your credit
                    score may also be taken into consideration.
                  </p>

                  <h4>Standard Personal Loan Terms</h4>

                  <p>
                    While specific terms of personal loans will vary depending
                    on your state, your lender or lending partner and your
                    specific circumstances, below is a general range of common
                    terms.
                  </p>
                  <ul>
                    <li>Loan amount: $500 – $35,000</li>
                    <li>Lending period: 60 days - 72 months</li>
                    <li>Payment frequency: Once a month or twice a month</li>
                    <li>
                      APR: Will vary based on your credit score, repayment
                      history and other factors.
                    </li>
                    <li>Prepayment penalty: Varies by Lender</li>
                  </ul>
                </article>
              ) : (
                  ""
                )}
              {tabID === "privacypolicy" ? (
                <article>
                  <h2>Privacy Policy</h2>
                  <p className="main-para">
                    Last Updated: January 2<sup>nd</sup>, 2019
                  </p>
                  <ol>
                    <li>
                      <strong>Introduction.</strong> We at FastLoanAdvance
                      (“We,” “Us” or “FastLoanAdvance”) respect your privacy and
                      are dedicated to protecting your personal information
                      through our compliance procedures entailed in this Privacy
                      Policy (“Policy”). Please study the following information
                      carefully as it details the type of information we may
                      collect from you or that you may provide to us when you
                      visit FastLoanAdvance.com (“Website”), and our practices
                      for collecting, using, maintaining, protecting, and
                      disclosing such information. This Policy applies to
                      information we collect (i) on this Website; (ii) in
                      e-mail, text and other electronic communications sent
                      between you and this Website; (iii) when you interact with
                      our advertising and applications on third-party websites
                      and services, if those applications or advertising include
                      links to this Policy.
                      <br />
                      <br />
                      If you do not agree with our Policy and practices
                      regarding how FastLoanAdvance handles your personal
                      information, you should not use our Website. Accessing or
                      using this Website signifies and confirms your acceptance
                      of the terms set forth in this Policy. This Policy may
                      change from time to time in our sole discretion.
                      Accordingly, you should visit this Website and review the
                      Policy periodically to determine if any changes have been
                      made. The date on which this Policy was last updated will
                      be noted immediately above this Policy.
                    </li>

                    <li>
                      <strong>Information We Collect.</strong> In the course of
                      using this Website, we may collect personal information
                      and data to (i) present you personal loans,
                      financially-related products and/or other offerings that
                      you seek; (ii) present the contents of this Website to
                      you; (iii) deliver services that you have requested; (iv)
                      communicate with you via telephone, email, postal mail,
                      and/or text message from us, our marketing partners,
                      and/or other third parties; (v) display advertising
                      tailored to you interests or background; (vi) perform data
                      and statistical analysis from your use of this Website;
                      (vii) enforce our Terms and Conditions; and (viii) perform
                      any other functions otherwise described to you when you
                      provide us with your information. Any collection of
                      personal information or data through this Website is
                      performed with your consent.
                      <br />
                      <br />
                      <u>Personally Identifiable Information.</u> We may collect
                      Personally Identifiable Information (“PII”) that you
                      directly provide to us that can identify you, including,
                      but not limited to, your first and last name, physical
                      address, telephone number, cellular number, social
                      security number, email address, date of birth, driver’s
                      license number, state of residency and information
                      pertaining to your bank account.
                      <br />
                      <br />
                      <u>Non-Personally Identifiable Information.</u> We also
                      collect information automatically as you navigate through
                      this Website. We use log files and cookies to collect
                      Non-Personally Identifiable Information (“Non-PII”)
                      including, but not limited to, the IP address of the
                      computer or mobile device making the request, browser type
                      and the times you access this Website and usage details.
                      Please note that IP addresses are not usually associated
                      with your personal computer, but with a portal through
                      which you accessed the Internet. Consequently, IP
                      addresses are not linked to personally identifiable
                      information.
                      <br />
                      <br />
                      Cookies. As you navigate through and interact with this
                      Website, we may use automatic data collection technologies
                      (“Cookies”) to collect certain information, including but
                      not limited to, information about your equipment, browsing
                      actions and patterns, operating system, internet
                      connection and location data. The information we collect
                      automatically may include personal information, and we may
                      maintain it or compound it with personal information we
                      collect in other ways or receive from third parties.
                      Cookies help us improve this Website so we are able to
                      deliver a better and more personalized experience by
                      reducing unwanted information that you might otherwise
                      receive.
                    </li>
                    <li>
                      <strong>How We Use Your Information.</strong> We use the
                      information that we collect about you through your
                      interaction with this Website as well as information that
                      you provide to us, including personal information. This
                      information is used (i) to present the contents of this
                      Website to you; (ii) to deliver services that you have
                      requested; (iii) to determine whether to extend an offer
                      to become an Affiliate or Advertiser in our Network; (iv)
                      to communicate with you via telephone, email, postal mail,
                      and/or text message from us, our marketing partners, or
                      other third parties; (v) to display advertising tailored
                      to your interests or background; (vi) perform data and
                      statistical analysis from your use of this Website; (vii)
                      enforce our Terms and Condition; and (viii) to perform any
                      other functions otherwise described to you when you
                      provide us with your information.
                    </li>

                    <li>
                      <strong>Disclosing Your Information.</strong> As a general
                      rule, FastLoanAdvance will not share, sell or otherwise
                      distribute your personal information without your consent.
                      However, FastLoanAdvance may disclose personal information
                      that we collect or you provide as described in this Policy
                      (i) to fulfill the purpose for which you provide your
                      information; (ii) for any other purpose disclosed by
                      FastLoanAdvance when you provide us your information;
                      (iii) to third party service providers who assist us in
                      operating this Website, conducting our business or serving
                      our users, so long as such information is kept
                      confidential; (iv) with affiliated entities; (v) to comply
                      with any court order, law, legal process, and/or
                      government or regulatory request; (vi) as part of a
                      liquidation or bankruptcy proceeding, to a buyer or other
                      successor in the event of a merger, reorganization,
                      dissolution or divestiture of some or all of
                      FastLoanAdvance’s assets.
                    </li>

                    <li>
                      <strong>Data Retention and Security.</strong> By accessing
                      and navigating through this Website, you hereby
                      acknowledge and agree that FastLoanAdvance may retain your
                      information indefinitely. Please note that any
                      transmission of personal information is at your own risk.
                      <br />
                      <br />
                      <u>Commitment to Online Security.</u> FastLoanAdvance uses
                      reasonable efforts to protect the security of your
                      personal information and encrypt sensitive information
                      such as your social security number, driver license number
                      and bank account information. Although we strive to
                      provide reasonable security measures for your personal
                      information that we process and maintain, we cannot
                      guarantee the security of your personal information
                      transmitted to and through this Website.
                      <br />
                      <br />
                      <u>No Liability for Acts of Third Parties.</u>{" "}
                      FastLoanAdvance will exercise all reasonable efforts to
                      safeguard the confidentiality of your personal
                      information. However, transmissions protected by industry
                      standard security technology and implemented by human
                      beings cannot be made absolutely secure. Consequently,
                      FastLoanAdvance shall not be liable for unauthorized
                      disclosure of personal information due to no fault of
                      FastLoanAdvance including, but not limited to, errors in
                      transmission and unauthorized acts of third parties.
                    </li>
                    <li>
                      <strong>Third Party Links.</strong> This Website may
                      contain links to third party websites, which may have
                      independent privacy policies that differ from our own. We
                      are not responsible, nor do we endorse, any of the
                      activities and practices that take place on third party
                      websites. Accordingly, we recommend that you review the
                      privacy policy posted on any third party website
                      thoroughly before disclosing any personal information.
                    </li>

                    <li>
                      <strong>Consent to Communicate.</strong> When you submit
                      your personal information to this Website, you are
                      providing your express consent to be contacted via email,
                      telephone, postal mail or text message communication. If
                      you wish to opt-out of one or all of these communication
                      methods, please follow the instructions provided in the
                      corresponding communication.
                    </li>

                    <li>
                      <strong>Modifications or Amendments.</strong> From time to
                      time, we may change this Policy to accommodate new
                      technologies, industry practices, regulatory requirements
                      or for other purposes. We will provide notice to you if
                      these changes are material on this Website, and where
                      required by applicable law, we will obtain your consent.
                      For your information, the date this Policy was last
                      updated is listed at the top of this page. Your continued
                      use of this Website after any such changes have been made
                      signifies and confirms your acceptance of any changes or
                      amendments to this Policy.
                    </li>

                    <li>
                      <strong>Children Under the Age of 18.</strong> This
                      Website is not intended for children under eighteen (18)
                      years of age. No one under 18 years of age may access or
                      provide any information on this Website. We do not
                      knowingly collect personal information from children under
                      18 years of age.
                    </li>

                    <li>
                      <strong>California Disclosures.</strong> California Law
                      requires us to provide certain disclosures to users of
                      this Website.
                      <br />
                      <br />
                      <u>Shine the Light Disclosure.</u> Civil Code Section
                      1798.83 permits California residents that use this Website
                      to request certain information regarding our disclosure of
                      personal information to third parties for their direct
                      marketing purposes. To make such a request, please contact
                      us at info@Lender.page. Please note that this section does
                      not prohibit disclosure made for non-marketing purposes.
                      <br />
                      <br />
                      <u>Do Not Track Disclosures.</u> Business and Professions
                      Code Section 22575(b) requires websites to disclose their
                      practices with respect to the use of tracking technology
                      made by third parties and whether this Website honors web
                      browser do-not-track signals. No third parties are able to
                      collect personally identifiable information you provide on
                      this Website. At this time, FastLoanAdvance does not
                      respond to do-not-track browser settings or signals.
                    </li>
                    <li>
                      <strong>Contact Us. </strong>If you have any questions or
                      comments regarding this Policy or our practices, please
                      reach out to us at info@Lender.page.
                    </li>
                  </ol>
                </article>
              ) : (
                  ""
                )}
              {tabID === "termandcondition" ? (
                <article>
                  <h2>Terms & Conditions</h2>
                  <p className="main-para">
                    Last Updated: January 2<sup>nd</sup>, 2019
                  </p>
                  <ol>
                    <li>
                      <strong>Introduction.</strong> Thank you for visiting
                      FastLoanAdvance.com (“Website”), which is operated by
                      FastLoanAdvance. Throughout this Website, the terms “we,”
                      “us” and “our” refer to FastLoanAdvance, which offers this
                      Website to you conditioned upon your acceptance of all
                      terms, conditions, policies and notices stated herein.
                    </li>
                    <li>
                      <strong>Agreement.</strong> Because this page contains
                      legal obligations, including, but not limited to
                      limitations on liability, arbitration provisions and a
                      class action waiver, please read these Terms and
                      Conditions carefully. By accessing, viewing or using any
                      of our services, (i) you acknowledge that you have read,
                      understand and agree to be bound by and subject to these
                      Terms and Conditions and Privacy Policy (collectively
                      “Terms of Use”), unless separate terms are offered by you
                      in writing and accepted by FastLoanAdvance, and (ii) you
                      represent and warrant that you are of legal age and not
                      prohibited by law from accessing or using the goods and
                      services offered herein. If you do not agree to all the
                      Terms of Use of this agreement, then you may not access
                      this Website or use any of its services.
                    </li>
                    <li>
                      <strong>Modification.</strong> We reserve the right, in
                      our sole discretion, to change these Terms and Conditions
                      at any time by posting revised terms on this Website. The
                      date on which these Terms and Conditions have been last
                      updated will be noted immediately above this page and the
                      revised Terms and Conditions will take effect seven (7)
                      days after their publication on this Website. In the event
                      we make material changes to the Terms and Conditions, we
                      will attempt to notify you via email at the address we
                      have on file. Your continued use of this Website after any
                      such changes have been made constitutes acceptance of
                      those changes.
                    </li>
                    <li>
                      <strong>License.</strong> This agreement provides you with
                      a limited, non-exclusive, non-transferable,
                      non-sublicensable, and revocable license to use this
                      Website solely for your personal use or your internal
                      business purposes. You may not (i) use, copy, store,
                      reproduce, transmit, distribute, rent, lease, sell,
                      transfer, license, sublicense, or commercially exploit
                      this Website in any manner not expressly permitted by this
                      agreement; (ii) modify, alter, decompile, dissemble,
                      reverse engineer, translate, or make derivative work of
                      this Website; (iii) interfere, access, link to, use any
                      source code contained in this Website; or (iv) erase or
                      remove any proprietary or intellectual property notice
                      contained in this Website and other services provided by
                      FastLoanAdvance.
                    </li>
                    <li>
                      <strong>Site Use.</strong> By accessing and using this
                      Website, you acknowledge and agree that it is your sole
                      responsibility to (i) maintain your compliance with the
                      Terms and Conditions of this agreement; (ii) be
                      responsible for and to abide by all applicable local,
                      state, and federal laws, regulations, policies, and
                      guidelines with respect to your use of this Website; and
                      (iii) assume all responsibility for your use, and the
                      results of your use, of this Website, including meeting
                      any of your contractual requirements with third parties
                      and other persons.
                    </li>
                    <li>
                      <strong>Copyrights and Trademark.</strong> All content
                      within this Website, including without limitation all
                      software, graphics, text, design, images, illustrations,
                      databases, user interfaces, visual interfaces, audio,
                      design, structure, arrangement, products and information
                      (collectively, “Content”) of this Website are owned,
                      controlled, and licensed by FastLoanAdvance and/or its
                      licensors. Any rights granted in this agreement are
                      expressly licensed and revocable at any time in the sole
                      and absolute discretion of FastLoanAdvance. You shall not,
                      nor will you allow any third party to reproduce, modify,
                      display, perform, publish, distribute, disseminate, create
                      derivative work from, broadcast or circulate to any third
                      party, or otherwise use, any Content without the express
                      prior written consent of FastLoanAdvance. FastLoanAdvance
                      and all other names, logos and icons identifying
                      FastLoanAdvance and its products and services are
                      proprietary trademarks of FastLoanAdvance and/or its
                      affiliates, and any use of such trademarks without the
                      express written permission of FastLoanAdvance is strictly
                      prohibited.
                    </li>
                    <li>
                      <strong>Privacy.</strong> We respect your privacy and use
                      commercially reasonable efforts to safeguard your
                      personally identifiable information. For additional
                      information regarding FastLoanAdvance’s collection and use
                      of your personally identifiable information in connection
                      with your use of this Website, please see our Privacy
                      Policy.
                    </li>
                    <li>
                      <strong>Credit Check.</strong> Lenders will be allowed to
                      access and verify your credit data, which can include your
                      driver’s license number, social security number and other
                      state, federal or local identification. Your credit
                      history can also be viewed and evaluated to determine your
                      credit worthiness. Credit bureaus, such as TransUnion,
                      Experian and Equifax may be consulted. When you submit
                      your information to this Website, you agree to allow
                      lenders to check your credit report and validate your
                      identification document.
                    </li>
                    <li>
                      <strong>SMS and Auto Dialed Calls.</strong> By entering
                      your contact information into FastLoanAdvance, you
                      expressly request to receive information via telephone
                      call, email and/or SMS/text message, including through the
                      use of an automatic telephone dialing system or
                      artificial/prerecorded voice, SMS/text message, even if
                      your telephone number is listed on any internal, state or
                      federal Do-Not-Call registry list. Consent is not a
                      requirement to purchasing the goods or services that
                      FastLoanAdvance is offering. You may opt-out by replying
                      “STOP” to any message that you receive and you may
                      requested additional assistance by replying “HELP”. Up to
                      15 recurring monthly messages per month. Standard message
                      and data rates may apply.
                    </li>
                    <li>
                      <strong>Representations and Warranties.</strong> You
                      represent and warrant to FastLoanAdvance that (i) you are
                      at least 18 years of age; (ii) you are authorized to enter
                      into this agreement; (iii) you will not use this Website
                      or the Contents herein for any purpose or manner that
                      violates any laws, regulation or that infringes the rights
                      of FastLoanAdvance or any third party; (iv) any
                      information or data you provide to FastLoanAdvance will
                      not violate any law, regulation or infringe the rights of
                      FastLoanAdvance or any third party; (v) all information
                      that you provide to FastLoanAdvance in connection with
                      this Website (e.g. name, e-mail address, phone number
                      and/or other information) is true and accurate; and (vi)
                      you are authorized and able to fulfill and perform the
                      obligations and meet the conditions of a user as specified
                      herein.
                    </li>
                    <li>
                      <strong>Warranty Disclaimers.</strong> FASTLOANADVANCE
                      DOES NOT WARRANT, GUARANTEE OR MAKE REPRESENTATIONS
                      REGARDING YOUR USE, OR THE ULTIMATE OUTCOME OF YOUR USE OF
                      THIS WEBSITE, IN TERMS OF AVAILABILITY, ACCURACY,
                      RELIABILITY, COMPLETENESS, INTENDED PURPOSE, QUALITY,
                      FUNCTIONALITY, OR OTHERWISE. THIS WEBSITE AND MATERIALS
                      CONTAINED HEREIN ARE PROVIDED TO YOU “AS IS” AND “AS
                      AVAILABLE” WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER
                      EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY
                      IMPLIED WARRANTIES OF MERCHANTIBILITY, TITLE,
                      NONINFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, AND ANY
                      WARRANTY OUT OF COURSE OF DEALING, USAGE OR TRADE.
                    </li>
                    <li>
                      <strong>Limitation of Liability.</strong> YOU AGREE THAT
                      FASTLOANADVANCE WILL NOT BE LIABLE FOR ANY INDIRECT,
                      INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE
                      DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS
                      OF PROFITS, USE, LOSS OF DATA, LOSS OF SECURITY ARISING
                      OUT OF OR IN ANY WAY CONNECTED TO YOUR USE OF THIS
                      WEBSITE, OR OF INFORMATION OR MATERIALS AVAILABLE THROUGH
                      THE WEBSITE, WHETHER BASED IN CONTRACT, TORT, STRICT
                      LIABILITY, OR OTHERWISE, EVEN IF FASTLOANADVANCE HAS BEEN
                      ADVISED OF THE POSSIBILITY OF DAMAGES. IN PARTICULAR AND
                      WITHOUT LIMITATION, TOTAL LIABILITY OF FASTLOANADVANCE FOR
                      ANY REASON WHATSOEVER RELATED TO YOUR USE OF THIS WEBSITE,
                      RESULTS FROM USE OF THIS WEBSITE, OR FOR ANY CLAIMS
                      RELATING TO THIS AGREEMENT SHALL NOT EXCEED ONE HUNDRED
                      DOLLARS ($100.00 USD). THE FOREGOING LIMITATIONS SHALL
                      APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF
                      ANY LIMITED REMEDY. SOME JURISDICTIONS DO NOT ALLOW THE
                      EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR
                      EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL
                      DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION
                      SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                    </li>
                    <li>
                      <strong>Indemnification.</strong> You agree to defend,
                      indemnify, discharge, release and hold harmless
                      FastLoanAdvance and its officers, directors, shareholders,
                      employees, agents, representatives, affiliates, third
                      party information providers, licensors, contractors and
                      others involved in the delivery of products, services or
                      information through this Website, arising from, in
                      connection with or relating to (i) any breach or violation
                      of this agreement by you; (ii) your failure to provide
                      accurate, complete and current personally identifiable
                      information requested or required by us; (iii) your access
                      or use of our services; (iv) your transmissions,
                      submissions or postings; and/or (v) any personal injury or
                      property damage caused by you. You agree that the
                      Indemnified Parties will have no liability in connection
                      with any such breach or unauthorized use, and you agree to
                      indemnify any and all resulting loss, damages, judgments,
                      awards, costs, expenses, and attorneys’ fees and
                      litigation expenses of the Indemnified Parties in
                      connection therewith.
                    </li>
                    <li>
                      <strong>DMCA Notice.</strong> Pursuant to the Digital
                      Millennium Copyright Act (DMCA) Safe Harbor 17 U.S.C. §
                      512(c), if you believe that anything on this Website or
                      service offered herein infringes any copyright that you
                      own or control, you may file notice of such infringement,
                      in compliance with the requirements of 17 U.S.C.
                      512(c)(3), with our designated agent at Sincerely, LLC.
                      7050 West Palmetto Park Road #15-345 Boca Raton, FL 33433
                      or info@Lender.page. A copy of this legal notice may be
                      sent to a third-party that may publish and/or annotate it.
                      As such, your letter, with your personal information
                      redacted, may be forwarded to the Chilling Effects
                      Clearinghouse for publication.
                    </li>
                    <li>
                      <strong>Foreign Users.</strong> FastLoanAdvance makes no
                      representation that materials in this Website are
                      appropriate or available for use in other locations. If
                      you access this Website from outside the United States,
                      please understand that this Website may contain references
                      and/or links to products and services that are not
                      available or are prohibited in your jurisdiction. Any user
                      who is a resident of a foreign country agrees that (i)
                      they have voluntary sought and established contact with
                      FastLoanAdvance; (ii) they will not use, transmit,
                      disseminate or upload any material, content, that would
                      violate any applicable local, state or national laws or
                      regulations of the foreign member’s country of resident;
                      (iii) under no circumstance shall FastLoanAdvance be
                      deemed liable under any laws other than the United States;
                      (iv) his or her participation is governed by United States
                      law and subject to the arbitration and venue provisions
                      stated herein; and (v) consent to having their data
                      processed in the United States.
                    </li>
                    <li>
                      <strong>Governing Law.</strong> This agreement will be
                      construed, enforced and governed in accordance with the
                      laws of the State of California (but excluding Section
                      1283.1 of the California Code of Civil Procedure), without
                      regard to any conflict of law principles. The state or
                      federal courts in Los Angeles County, California will have
                      exclusive jurisdiction and venue over all controversies in
                      connection with this agreement, and you hereby consent to
                      such exclusive and personal jurisdiction and venue. Any
                      claim you may have against FastLoanAdvance must be brought
                      within one (1) year after the cause of action arises, or
                      such claim or cause of action is barred. You agree to
                      waive any right to a jury trial in connection with any
                      action or litigation in any way arising out of or related
                      to this Agreement and that each party has the right to
                      seek attorneys’ fees in any proceeding.
                    </li>
                    <li>
                      <strong>Binding Arbitration.</strong> The parties agree to
                      submit any dispute arising out of or in any way relating
                      to this Site to binding arbitration conducted by a single
                      arbitrator under the Commercial Rules of the American
                      Arbitration Association (“AAA”) in Los Angeles,
                      California, rather than a proceeding in a court of law.
                      Any such arbitrator shall be knowledgeable in the subject
                      area in which the dispute arises. All discovery shall be
                      completed within sixty (60) days following the appointment
                      of the arbitrator. Each party shall be entitled to
                      representation by counsel, to appear and present written
                      and oral evidence and argument and to cross-examine
                      witnesses presented by the other party, provided that,
                      where appropriate, the arbitrator may receive testimony
                      via telephone, video or other electronic means of
                      communication. The arbitration aware shall be in writing
                      and the arbitrator shall provide written reasons for the
                      award. The award of the arbitrator shall be final and
                      binding on the parties hereto and may be enforced in any
                      court of competent jurisdiction. The prevailing party in
                      any action or proceeding to enforce its rights hereunder
                      shall be entitled to recover reasonable attorneys’ fees
                      and other reasonable costs, including fees of the
                      arbitrator and the AAA, incurred in the action or
                      proceedings. In no event shall the arbiter award punitive
                      or exemplary damages. The parties waive any right they may
                      have to an appeal of the arbitrator’s decision and/or
                      award. Each party retains the right to seek judicial
                      assistance: (i) to compel arbitration, (ii) to obtain
                      interim measures of protection prior to or pending
                      arbitration, (iii) to seek injunctive relief in the courts
                      of any jurisdiction as may be necessary and appropriate to
                      protect the unauthorized disclosure of its proprietary or
                      confidential information; (iv) for any claims of
                      infringement or misappropriation of FastLoanAdvance’s
                      patent, copyright, trademark, or trade secrets; and (v) to
                      enforce any decision of the arbitrator, including the
                      final award. If any AAA rule conflicts with these Terms
                      and Conditions, these Terms and Conditions shall control.
                      By agreeing to arbitration, you agree that the parties are
                      each waiving the right to file a lawsuit and the right to
                      a trial by jury in any action in any way arising out of or
                      related to this agreement. Notwithstanding anything to the
                      contrary, any party to the arbitration may at any time
                      seek injunctions or other forms of equitable relief from
                      any court of competent jurisdiction.
                    </li>
                    <li>
                      <strong>Notice of Claim.</strong> For all disputes you may
                      have, whether pursued in court or arbitration, you must
                      first give FastLoanAdvance an opportunity to resolve the
                      dispute by providing written notification to
                      info@Lender.page and via postal mail to Sincerely, LLC.
                      7050 West Palmetto Park Road #15-345 Boca Raton, FL 33433
                      stating (i) your name, (ii) your address, (iii) a written
                      description of your claim, and (iv) a description of the
                      specific relief you seek. If FastLoanAdvance does not
                      resolve the dispute within 30 days after it receives your
                      notification, you may pursue your dispute as set forth
                      above.
                    </li>
                    <li>
                      <strong>No Class Actions.</strong> To the extent allowed
                      by law, you and FastLoanAdvance each agree to waive any
                      right to pursue disputes on a consolidated or class-wide
                      basis; that is, to either join a claim with the claim of
                      any other person or entity, or assert a claim in a
                      representative capacity on behalf of anyone else in any
                      lawsuit, arbitration, or other proceeding. You hereby
                      understand that by agreeing to this class action waiver,
                      you may only bring claims against FastLoanAdvance in an
                      individual capacity and not as a plaintiff or class member
                      in any purported class action or representative
                      proceeding.
                    </li>
                    <li>
                      <strong>Severability.</strong> If any provision of this
                      Agreement shall be adjudged by any court or arbitrator of
                      competent jurisdiction to be unenforceable or invalid,
                      this Agreement as a whole shall not be deemed unlawful,
                      void or unenforceable, but only that provision of this
                      Agreement that is unlawful, void or unenforceable shall be
                      limited or eliminated from this Agreement. The remaining
                      provisions of this Agreement will otherwise remain in full
                      force and effect.
                    </li>
                    <li>
                      <strong>Relationship of the Parties.</strong> The
                      relationship between you and FastLoanAdvance is and shall
                      be that of independent contractors and nothing in this
                      Agreement shall be construed or used to create or imply
                      any relationship of partners, joint venturers, or employer
                      and employee, nor shall either party hold itself out as
                      such. Neither party has any right or authority to incur,
                      assume or create, in writing or otherwise, any warranty,
                      liability or other obligation of any kind, express or
                      implied, in the name of or on behalf of the other party,
                      it being intended by both parties that each shall remain
                      independent contractors responsible for its own actions.
                      You may not assign or otherwise transfer this Agreement or
                      the license granted hereunder or delegate any of your
                      duties specified herein, in whole or in part, without
                      FastLoanAdvance’s prior written consent. Any attempt of
                      assignment, delegation, or transfer in violation of this
                      Agreement shall be void, of no effect, and a material
                      breach of this Agreement. Notwithstanding the foregoing,
                      FastLoanAdvance may assign this Agreement in whole or in
                      part. Moreover, FastLoanAdvance may delegate its rights
                      and responsibilities or use contractors or agents to
                      fulfill its obligations under this Agreement.
                    </li>
                    <li>
                      <strong>Termination.</strong> FastLoanAdvance reserves the
                      right at any time and on reasonable grounds, which shall
                      include, without limitation, any reasonable belief of
                      fraud, illegal activity, or actions or omissions that
                      violate any term or condition of this Agreement, to
                      terminate this Agreement with you in order to protect its
                      name, business, or goodwill and/or any other user. You
                      acknowledge and agree that FastLoanAdvance shall have the
                      sole right to determine in its reasonable discretion
                      whether you are engaging in any unauthorized activity
                      and/or violating any term or conditions of this Agreement.
                    </li>
                    <li>
                      <strong>California Consumer Notice.</strong> Under
                      California Civil Code Section 1789.3, California website
                      users are entitled to know that they may file grievances
                      and complaints with the Complaint Assistance Unit of the
                      Division of Consumer Services of the California Department
                      of Consumer Affairs, in writing at 400 R Street, Suite
                      1080, Sacramento, CA 95814, by telephone at (916) 445-1254
                      or (800) 952-5210, or by email at dca@dca.ca.gov.
                    </li>
                    <li>
                      <strong>Entire Agreement.</strong> This agreement and
                      FastLoanAdvance’s Privacy Policy, which is hereby
                      incorporated by reference as if set forth fully herein,
                      represent the entire agreement between you and
                      FastLoanAdvance with respect to subject matter herein, and
                      they supersede all prior or contemporaneous communications
                      and proposals, whether electronic, oral, or written
                      between you and FastLoanAdvance with respect to the
                      Website.
                    </li>
                    <li>
                      <strong>Miscellaneous.</strong> The headings contained in
                      this Agreement are for convenience of reference only, are
                      not to be considered a part of this Agreement, and shall
                      not limit or otherwise affect in any way the meaning or
                      interpretation of this Agreement. If you have questions,
                      comments, concerns or feedback regarding this Agreement or
                      our Services, please contact us at info@Lender.page.
                    </li>
                  </ol>
                </article>
              ) : (
                  ""
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;

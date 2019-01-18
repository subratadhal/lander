import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/ctaForm";
class Questions extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Frequently Asked Questions</h1>
                            <p>lender.page provides a marketplace service where your loan request is submitted to a network of reputable lenders. Our service is always free--there is never a cost to you for submitting an inquiry. Your lender will have its own rates and fees that will be provided to you before you accept the loan. lender.page is not a lender and does not make credit decisions.</p>

                            <p>New customers may have questions about lender.page, which is why we have compiled the most common questions below. If you have a question that is not answered here, we are happy to answer your questions. Just complete the form on the Contact Us page and we will get back to you quickly.</p>

                            <p>If you have questions regarding a loan inquiry, approval, funded loan, payments or any other question about a particular loan, please contact your lender directly. If you received a loan, you should already have the lender’s contact information. Since we are not the lender, we cannot answer questions about pending or approved loans.</p>
                            <ol>
                                <li id="l1"><a href="#h1">What is a personal loan?</a></li>

                                <li id="l2"><a href="#h3">Who can qualify for a personal loan?</a></li>

                                <li id="l3"><a href="#h3">How much can I borrow?</a></li>

                                <li id="l4"><a href="#h4">How will I receive the loan money?</a></li>

                                <li id="l5"><a href="#h5">If I have bankruptcy or bad credit, can I still get a loan?</a></li>

                                <li id="l6"><a href="#h6">How long does the process take?</a></li>

                                <li id="l7"><a href="#h7">Will I need a printer or fax machine?</a></li>

                                <li id="l8"><a href="#h8">What is the cost of a short term consumer loan</a></li>

                                <li id="l9"><a href="#h9">If I already have an outstanding cash advance loan is it possible to get a new one?</a></li>

                                <li id="l10"><a href="#h10">When and how do I repay my loan?</a></li>

                                <li id="l11"><a href="#h11">What happens if I’m late with a payment?</a></li>

                                <li id="l12"><a href="#h12">How is my private information protected?</a></li>

                                <li id="l13"><a href="#h13">When can I get another loan?</a></li>

                                <li id="l14"><a href="#h14">Is an extension possible on repaying my loan, and how many extensions can I get?</a></li>

                                <li id="l15"><a href="#h15">What happens if I’m not able to repay my loan?</a></li>
                            </ol>
                            <h3 id="h1"><a href="#l1"><strong>1. What is a personal loan?</strong></a></h3>
                            <p>Personal loans might be called different things, but they’re all designed to provide you with temporary financial relief.</p>

                            <h3 id="h3"><a href="#l2"><strong>2. Who can qualify for a personal loan?</strong></a></h3>
                            <p>Most lenders require you to:</p>
                            <ol>
                                <li>Be employed in your current position for approximately 90 days;</li>
                                <li>Be at least 18 years old, and a US citizen or a permanent resident;</li>
                                <li>Have an income of approximately $1,000 per month after tax withholdings; and</li>
                                <li>Have a valid email address, work phone number and home phone number.</li>
                            </ol>

                            <h3 id="h3"><a href="#l3"><strong>3. How much can I borrow?</strong></a></h3>
                            <p>The amount a lender is willing to give you depends on how the lender evaluates a number of factors, including your state of residence and applicable legal restrictions (loans are not available in all states). Many lenders in our network will loan between $100 and $5,000.</p>

                            <h3 id="h4"><a href="#l4"><strong>4. How will I receive the loan money?</strong></a></h3>
                            <p>Once the lender approves your loan and you accept the loan terms, your loan will be deposited directly in your bank account, usually as soon as the next day.</p>

                            <h3 id="h5"><a href="#l5"><strong>5. If I have bankruptcy or bad credit, can I still get a loan?</strong></a></h3>
                            <p>Personal loans generally are offered for people with good credit, although each lender has its own underwriting policies. An alternative for those with bad credit may be to seek a short-term consumer loan. If we cannot find a lender that can offer you a personal loan for the amount you requested, we will search our network of short term lenders to see if we can find a short-term lender for you.</p>

                            <h3 id="h6"><a href="#l6"><strong>6. How long does the process take?</strong></a></h3>
                            <p>It should only take a few minutes to complete our secure online form. After we receive your information, we immediately start looking for a lender that is willing to work with you. You should have a response from one of our lenders within minutes. Final approval and funding is often done in as little as 24 to 48 hours.</p>

                            <h3 id="h7"><a href="#l7"><strong>7. Will I need a printer or fax machine?</strong></a></h3>
                            <p>Some lenders will ask for your permission to access your information such as bank statements or income verification online, saving you from having to fax or email copies of those documents. However, your lender might need you to fax or email a copy of your bank statement, paycheck stubs or other information. If you do not have access to a scanner or printer, consider visiting Office Max, Kinkos or another office service provider. You should also have access to a printer so you can print a copy of your loan agreement. If you have questions after your loan is funded, you will need your lender’s contact information!</p>

                            <h3 id="h8"><a href="#l8"><strong>8. What is the cost of a short term consumer loan</strong></a></h3>
                            <p>There is no cost to use lender.page’s marketplace service. The actual cost of your loan may vary by lender. You will be provided information on the rates and fees before you accept the loan. Personal loans are not designed as long term financial solutions but are often less costly than late charges, NSF fees or reconnect fees for overdue utilities. Please only accept a loan if you believe you have the ability to repay it.</p>

                            <h3 id="h9"><a href="#l9"><strong>9. If I already have an outstanding cash advance loan is it possible to get a new one?</strong></a></h3>
                            <p>You may be allowed to secure more than one personal loan at any given time, but this will depend on your state’s laws as well as your lender’s practices. If you have an outstanding personal loan or other personal loan, you should let your new lender know about it before you accept a new loan.</p>

                            <h3 id="h10"><a href="#l10"><strong>10. When and how do I repay my loan?</strong></a></h3>
                            <p>If you have selected the convenient and secure ACH payment option, your loan payment will be withdrawn from your bank account on its due date. This option is designed for convenience and helps you avoid potential late fees or default! If you need an extension on your loan, please contact your lender before you miss a payment (additional fees may be involved).</p>

                            <h3 id="h11"><a href="#l11"><strong>11. What happens if I’m late with a payment?</strong></a></h3>
                            <p>Each lender has its own late payment policy and fees. Check your loan documents for details or contact your lender directly. Some states may regulate or limit late fees.</p>

                            <h3 id="h12"><a href="#l12"><strong>12. How is my private information protected</strong></a></h3>
                            <p>We use industry-recognized security and advanced encryption technology to protect your personal information. Your information is transmitted and stored securely in an encrypted format. Please review our privacy policy for additional details.</p>

                            <h3 id="h13"><a href="#l13"><strong>13. When can I get another loan?</strong></a></h3>
                            <p>You can use our service to get a new loan at any time (subject, of course, to state law restrictions). If you have recently taken out another personal loan that is still outstanding, please inform your new lender before accepting a new loan.</p>

                            <h3 id="h14"><a href="#l14"><strong>14. Is an extension possible on repaying my loan, and how many extensions can I get?</strong></a></h3>
                            <p>The rules on extensions or “rollovers” varies among lenders and also may be regulated by state law. Some states allow for multiple rollovers while others do not allow it at all. If you need an extension on your loan, make sure to contact your lender before you miss any payments. Most lenders will work with you to help you avoid missing payments or defaulting on your loan.</p>

                            <h3 id="h15"><a href="#l15"><strong>15. What happens if I’m not able to repay my loan?</strong></a></h3>
                            <p>If you can’t make your loan payments on time, you may be in default of your loan obligations. Late payments and loan defaults may adversely affect your credit and may make it difficult to obtain future personal loans.</p>

                            <p>If you can’t make your payments on time, don’t ignore it! Talk to your lender ahead of time and see what they can do to help you make the best of the situation.</p>
                        </Col>
                        <Col sm="4">
                            <CTAForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Questions;

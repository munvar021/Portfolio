"use client";

import LegalLayout from "@/components/shared/legal-layout/legal-layout";

const sections = [
  {
    title: "Information I Collect",
    paragraphs: [
      "This is a personal portfolio website. The only personal information I collect is what you voluntarily provide when using the contact form — specifically your name, email address, and message.",
    ],
    list: [
      "Name — to address you personally in my response",
      "Email address — to reply to your enquiry",
      "Message content — to understand your request or question",
    ],
  },
  {
    title: "How I Use Your Information",
    paragraphs: [
      "Information submitted through the contact form is used solely to respond to your enquiry. I do not sell, trade, or share your personal data with third parties for marketing purposes.",
    ],
    list: [
      "Respond to your messages and enquiries",
      "Follow up on collaboration or work opportunities",
      "Improve the site experience based on general feedback",
    ],
  },
  {
    title: "Cookies and Analytics",
    paragraphs: [
      "This site may use basic analytics tools (such as browser-level statistics) to understand general visitor patterns such as page views and device types. No personally identifiable information is collected through analytics.",
      "No tracking cookies or advertising cookies are used on this site.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "This site contains links to external platforms including GitHub, LinkedIn, and Instagram. Once you leave this site, I have no control over those platforms and am not responsible for their privacy practices. I encourage you to review the privacy policies of any external sites you visit.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "I take reasonable precautions to protect any information you provide. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "This site is not directed at children under the age of 13. I do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "I may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of this site after changes constitutes your acceptance of the revised policy.",
    ],
  },
];

const contact = `If you have any questions about this Privacy Policy or would like to request deletion of any data you have submitted, please reach out at <a href="mailto:munvar021@gmail.com">munvar021@gmail.com</a>.`;

const PrivacyPolicy = () => (
  <LegalLayout
    tag="Legal"
    title="Privacy Policy"
    updated="May 5, 2025"
    intro="Your privacy matters. This policy explains what information is collected when you visit this portfolio, how it is used, and how it is protected. This site is a personal portfolio and does not operate as a business or e-commerce platform."
    sections={sections}
    contact={contact}
  />
);

export default PrivacyPolicy;

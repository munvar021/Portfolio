"use client";

import LegalLayout from "@/components/shared/legal-layout/legal-layout";

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing and using this portfolio website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this site.",
    ],
  },
  {
    title: "Use of the Website",
    paragraphs: [
      "This website is provided for informational and portfolio purposes only. You may browse the content, view projects, and get in touch via the contact form. You agree not to:",
    ],
    list: [
      "Use this site for any unlawful purpose",
      "Attempt to gain unauthorised access to any part of the site",
      "Transmit harmful, offensive, or malicious content through the contact form",
      "Reproduce, copy, or redistribute any content without prior written permission",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website — including but not limited to design, code, text, images, and project work — is the intellectual property of Munvar Khajavali unless otherwise stated.",
      "You may not reproduce, distribute, or create derivative works from any content on this site without explicit written permission. Linking to this site is permitted provided it is done in a way that is fair and does not damage my reputation.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      'This website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. I do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.',
      "The information on this site is provided in good faith and is believed to be accurate at the time of publication, but no guarantee is made regarding its completeness or accuracy.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Munvar Khajavali shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website or its content.",
    ],
  },
  {
    title: "External Links",
    paragraphs: [
      "This site may contain links to third-party websites such as GitHub, LinkedIn, and Instagram. These links are provided for convenience only. I have no control over the content or practices of those sites and accept no responsibility for them.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "I reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with a revised date. Continued use of the site following any changes constitutes acceptance of the new terms.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the courts of Andhra Pradesh, India.",
    ],
  },
];

const contact = `If you have any questions about these Terms of Service, please contact me at <a href="mailto:munvar021@gmail.com">munvar021@gmail.com</a>.`;

const TermsOfService = () => (
  <LegalLayout
    tag="Legal"
    title="Terms of Service"
    updated="May 5, 2025"
    intro="Please read these Terms of Service carefully before using this website. These terms govern your access to and use of munvar.dev, a personal portfolio website owned and operated by Munvar Khajavali."
    sections={sections}
    contact={contact}
  />
);

export default TermsOfService;


import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I register a domain with KingDom?",
    answer: "Registering a domain with KingDom is simple. After creating an account, search for your desired domain, select it, and complete the purchase with your preferred payment method. We handle all the technical aspects, and your domain will be ready to use or trade immediately."
  },
  {
    question: "What's the difference between KingDom and GoDaddy?",
    answer: "Unlike traditional registrars like GoDaddy, KingDom doesn't charge commission fees on domain trades. We provide a peer-to-peer marketplace where you can buy, sell, and invest in domains directly with other users, cutting out the middleman and saving you money. We also offer specialized tools for domain investors rather than focusing on hosting and other services."
  },
  {
    question: "Can I list domains I already own?",
    answer: "Absolutely! You can easily transfer domains you already own to KingDom and list them on our marketplace. Our streamlined process makes it simple to import existing domains from other registrars, and our zero-commission model means you'll keep more of your earnings when you sell."
  },
  {
    question: "How are domain prices determined?",
    answer: "Domain prices on KingDom are set by sellers in the marketplace. However, we provide comprehensive valuation tools and market analytics to help sellers set competitive prices and help buyers make informed decisions based on domain characteristics, market trends, and historical sales data."
  },
  {
    question: "Is there a fee for holding domains in my portfolio?",
    answer: "No, KingDom does not charge any additional fees for holding domains in your portfolio beyond the standard annual registration costs set by ICANN and the respective TLD authorities. We believe in transparent pricing with no hidden fees."
  },
  {
    question: "How secure is KingDom's platform?",
    answer: "Security is our top priority. KingDom employs bank-level encryption, secure payment processing, and our FDIC-partnered wallet ensures your funds are protected. All domain transfers are verified and secured through established registry protocols, giving you peace of mind for your valuable digital assets."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kingdom-blue">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about KingDom and domain investing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-kingdom-blue py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="#" className="text-kingdom-gold font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

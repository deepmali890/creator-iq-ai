import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  return (
    <div className="py-12 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-white/20 bg-white/10 backdrop-blur-md rounded-xl shadow-md"
          >
            <AccordionTrigger className="px-4 py-3 text-left font-medium text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-100 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const faqItems = [
  {
    question: 'What is Creator IQ AI?',
    answer:
      'Creator IQ AI is an AI-powered platform that helps creators with interview preparation, personalized quizzes, resume building, cover letter creation, and more.',
  },
  {
    question: 'Is Creator IQ AI free to use?',
    answer:
      'Yes! Creator IQ AI offers a free tier with essential features. Premium features might be available in the future.',
  },
  {
    question: 'How does the AI assist me?',
    answer:
      'The AI analyzes your skills and goals to provide tailored interview questions, quizzes, resume tips, and cover letter suggestions.',
  },
  {
    question: 'Can I use Creator IQ AI on mobile devices?',
    answer:
      'Absolutely! Creator IQ AI is fully responsive and works smoothly on mobiles, tablets, and desktops.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Yes. Your privacy is a top priority. All your data is encrypted and never shared without your consent.',
  },
  {
    question: 'How can I track my progress?',
    answer:
      'You can track your learning progress, quiz scores, and application readiness through detailed dashboards and reports.',
  },
];

export default FAQ;

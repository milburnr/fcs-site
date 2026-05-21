"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-brand-green-dark pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ items, title = "Frequently Asked Questions", description, className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`section bg-white ${className}`}>
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  // FAQPage schema removed 2026-05-21: Google's May-2024 update deprecated
  // FAQ rich-result eligibility for general (non-gov/non-health) sites.
  // Continued emission is a schema defect; visible FAQ DOM in <FAQ /> is
  // unaffected. Signature preserved so all 808 callers keep compiling.
  void items;
  return null;
}

export function FAQWithSchema({ items, title, description, className }: FAQProps) {
  return <FAQ items={items} title={title} description={description} className={className} />;
}

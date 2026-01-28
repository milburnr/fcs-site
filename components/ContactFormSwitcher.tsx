"use client";

import { useState } from "react";
import { Building2, Home } from "lucide-react";
import { HighLevelForm } from "./HighLevelForm";

type FormType = "commercial" | "residential";

export function ContactFormSwitcher() {
  const [activeForm, setActiveForm] = useState<FormType>("commercial");

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveForm("commercial")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-semibold transition-all rounded-l-lg border-2 ${
            activeForm === "commercial"
              ? "bg-brand-green text-white border-brand-green"
              : "bg-white text-gray-600 border-gray-200 hover:border-brand-green hover:text-brand-green"
          }`}
        >
          <Building2 className="w-5 h-5" />
          Commercial
        </button>
        <button
          onClick={() => setActiveForm("residential")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-semibold transition-all rounded-r-lg border-2 border-l-0 ${
            activeForm === "residential"
              ? "bg-brand-green text-white border-brand-green"
              : "bg-white text-gray-600 border-gray-200 hover:border-brand-green hover:text-brand-green"
          }`}
        >
          <Home className="w-5 h-5" />
          Residential
        </button>
      </div>

      {/* Form Description */}
      <p className="text-sm text-gray-500 mb-4 text-center">
        {activeForm === "commercial"
          ? "For commercial projects $500K+ including offices, retail, medical facilities, and multi-family developments."
          : "For residential projects including custom homes, renovations, additions, and waterfront estates."}
      </p>

      {/* Form */}
      <div className="min-h-[550px]">
        {activeForm === "commercial" ? (
          <HighLevelForm variant="commercial" height={600} />
        ) : (
          <HighLevelForm variant="residential" height={546} />
        )}
      </div>
    </div>
  );
}

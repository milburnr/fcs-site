"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "@/lib/constants";

interface ContactFormProps {
  preselectedCity?: string;
  preselectedService?: string;
  variant?: "full" | "compact";
}

export function ContactForm({ preselectedCity, preselectedService, variant = "full" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: preselectedService || "",
    projectValue: "",
    location: preselectedCity || "",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend/CRM
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-brand-green-dark mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your project consultation request. A member of our team will contact you within 24 hours.
        </p>
        <p className="text-gray-600">
          For immediate assistance, call us at{" "}
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-brand-green font-semibold">
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {variant === "full" && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-green-dark mb-2">
            Schedule a Project Consultation
          </h3>
          <p className="text-gray-600">
            For projects $250,000 and above
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
          >
            <option value="">Select project type...</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Project Value <span className="text-red-500">*</span>
          </label>
          <select
            name="projectValue"
            value={formData.projectValue}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
          >
            <option value="">Select value range...</option>
            <option value="250k-500k">$250,000 - $500,000</option>
            <option value="500k-1m">$500,000 - $1,000,000</option>
            <option value="1m-5m">$1,000,000 - $5,000,000</option>
            <option value="5m-10m">$5,000,000 - $10,000,000</option>
            <option value="10m+">$10,000,000+</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Location <span className="text-red-500">*</span>
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
          >
            <option value="">Select location...</option>
            {LOCATIONS.map((location) => (
              <option key={location.slug} value={location.name}>
                {location.name}, FL
              </option>
            ))}
            <option value="other">Other Tampa Bay Area</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
          >
            <option value="">Select timeline...</option>
            <option value="immediate">Ready to start immediately</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6-12months">6-12 months</option>
            <option value="planning">Planning phase</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company (if commercial)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="ABC Corporation"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="(813) 555-1234"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brief Project Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="Tell us about your project: scope, special requirements, goals..."
        />
      </div>

      <button
        type="submit"
        className="w-full btn-cta flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Schedule Project Consultation
      </button>

      <p className="text-center text-sm text-gray-500">
        Or call us directly at{" "}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="text-brand-green font-semibold hover:text-brand-green-dark"
        >
          {BUSINESS_INFO.phone}
        </a>
      </p>
    </form>
  );
}

export function QuickContactCTA() {
  return (
    <div className="bg-brand-green rounded-xl p-6 text-white text-center">
      <h3 className="text-xl font-bold mb-2">Ready to Discuss Your Project?</h3>
      <p className="text-white/90 mb-4">
        For projects $250K and above
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
        >
          <Phone className="w-5 h-5 mr-2" />
          {BUSINESS_INFO.phone}
        </a>
      </div>
    </div>
  );
}

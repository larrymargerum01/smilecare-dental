"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { contactDetails } from "../../data/dentalData";
import Toast from "../ui/Toast";
import Button from "../ui/Button";
import Card from "../ui/Card";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate database submission
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details, hours, and map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Have inquiries about cosmetic operations, dental plans, or billing? Reach out and our administrative desk will respond within 12 hours.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Address</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-normal max-w-xs">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Phone Lines</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-none font-semibold">
                    {contactDetails.phone}
                  </p>
                  <p className="text-xs text-rose-500 font-bold mt-1 leading-none">
                    {contactDetails.emergencyPhone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Email</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-none font-semibold">
                    {contactDetails.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-slate-50 border border-slate-100/50 p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Clock size={16} className="text-primary" /> Clinic Opening Hours
              </h3>
              <div className="space-y-2 text-xs md:text-sm font-semibold">
                {contactDetails.openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between py-1.5 border-b border-slate-200/40 last:border-0 text-slate-600">
                    <span>{item.day}</span>
                    <span className={item.hours.includes("Emergency") ? "text-rose-500 font-bold" : "text-slate-800"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form Card */}
            <Card variant="glass" className="bg-white border border-slate-100 p-6 md:p-8 shadow-xl rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-base md:text-lg font-bold text-secondary">
                  Send a Direct Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full bg-slate-50 border ${
                        errors.name ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                    />
                    {errors.name && <p className="text-rose-500 text-[10px] font-bold">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className={`w-full bg-slate-50 border ${
                        errors.email ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] font-bold">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Message Subject"
                    className={`w-full bg-slate-50 border ${
                      errors.subject ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                  />
                  {errors.subject && <p className="text-rose-500 text-[10px] font-bold">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Write your message details..."
                    className={`w-full bg-slate-50 border ${
                      errors.message ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                    } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all resize-none`}
                  />
                  {errors.message && <p className="text-rose-500 text-[10px] font-bold">{errors.message}</p>}
                </div>

                {/* Send Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>

            {/* Styled Google Maps iframe */}
            <div className="w-full h-64 md:h-[280px] rounded-3xl overflow-hidden border border-slate-100 shadow-md">
              <iframe
                title="SmileCare Dental Clinic Springfield Map"
                src={contactDetails.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Success Toast */}
      <Toast
        show={showToast}
        message="Thank you! Your message has been sent to our administration desk. We will respond shortly."
        onClose={() => setShowToast(false)}
        type="success"
      />
    </section>
  );
};

export default Contact;

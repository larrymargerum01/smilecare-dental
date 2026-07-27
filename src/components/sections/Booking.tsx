"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Calendar, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { dentistsList, dentalServices } from "../../data/dentalData";
import Toast from "../ui/Toast";
import Button from "../ui/Button";
import Card from "../ui/Card";

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-()]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = "Invalid phone format";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.doctor) tempErrors.doctor = "Please select a dentist";
    if (!formData.treatment) tempErrors.treatment = "Please select a treatment";
    if (!formData.date) tempErrors.date = "Please select an appointment date";
    if (!formData.time) tempErrors.time = "Please choose a preferred time slot";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

  const selectTimeSlot = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
    if (errors.time) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.time;
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate database booking submission
    setTimeout(() => {
      setLoading(false);
      setToastMessage(
        `Appointment successfully booked with ${formData.doctor} for ${formData.date} at ${formData.time}! Confirmation code sent.`
      );
      setShowToast(true);

      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#38BDF8", "#0F172A", "#10B981"],
      });

      // Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        doctor: "",
        treatment: "",
        date: "",
        time: "",
        message: "",
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column Content */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Appointment
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
                Schedule Your Next Visit Online
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Book a consultation with our experienced dental surgeons in under 2 minutes. Select your doctor, choose a convenient date, and pick a time slot.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Instant Confirmation</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Receive your digital appointment booking receipt and SMS reminder within seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Insurance Direct Claims</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    We accept all major PPO insurance plans. Provide your details and our team handles coding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">Complimentary Valet Parking</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Every scheduled visit includes underground parking validation and helper access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Booking Form Card */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="bg-white border border-slate-100 p-6 md:p-10 shadow-xl rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <User size={14} className="text-primary" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-50 border ${
                        errors.name ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                    />
                    {errors.name && <p className="text-rose-500 text-[10px] font-bold">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone size={14} className="text-primary" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (555) 000-0000"
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                    />
                    {errors.phone && <p className="text-rose-500 text-[10px] font-bold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail size={14} className="text-primary" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full bg-slate-50 border ${
                        errors.email ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all`}
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] font-bold">{errors.email}</p>}
                  </div>

                  {/* Preferred Doctor */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <User size={14} className="text-primary" /> Preferred Doctor
                    </label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${
                        errors.doctor ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Select Dentist</option>
                      {dentistsList.map((dentist) => (
                        <option key={dentist.id} value={dentist.name}>
                          {dentist.name} ({dentist.specialization.split("&")[0]})
                        </option>
                      ))}
                    </select>
                    {errors.doctor && <p className="text-rose-500 text-[10px] font-bold">{errors.doctor}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Treatment */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText size={14} className="text-primary" /> Treatment Required
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${
                        errors.treatment ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Select Procedure</option>
                      {dentalServices.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {errors.treatment && <p className="text-rose-500 text-[10px] font-bold">{errors.treatment}</p>}
                  </div>

                  {/* Appointment Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" /> Appointment Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${
                        errors.date ? "border-rose-400 focus:ring-rose-200" : "border-slate-100 focus:ring-blue-100"
                      } rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all cursor-pointer`}
                    />
                    {errors.date && <p className="text-rose-500 text-[10px] font-bold">{errors.date}</p>}
                  </div>
                </div>

                {/* Available Time Slots Grid */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    Select Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => selectTimeSlot(time)}
                        className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          formData.time === time
                            ? "bg-primary border-primary text-white shadow-md shadow-blue-500/20"
                            : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100 hover:border-slate-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-rose-500 text-[10px] font-bold">{errors.time}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Message / Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your dental symptoms, queries, or accessibility requirements..."
                    className="w-full bg-slate-50 border border-slate-100 focus:ring-blue-100 rounded-2xl px-4 py-3.5 text-sm font-semibold text-secondary focus:outline-hidden focus:ring-4 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full text-center py-4"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  ) : (
                    "Confirm Appointment Booking"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <Toast
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
        type="success"
      />
    </section>
  );
};

export default Booking;

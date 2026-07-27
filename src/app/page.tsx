import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Dentists from "@/components/sections/Dentists";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Facilities from "@/components/sections/Facilities";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Header/Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 w-full bg-white flex flex-col">
        {/* Hero Banner Section */}
        <Hero />

        {/* Clinic Description Section */}
        <About />

        {/* Dental Operations Grid Section */}
        <Services />

        {/* Orthodontists & Implants specialists Grid */}
        <Dentists />

        {/* Interactive Before/After Gallery */}
        <BeforeAfterGallery />

        {/* Patient Review Carousel Section */}
        <Testimonials />

        {/* Custom Booking Scheduler Grid Section */}
        <Booking />

        {/* Infrastructure & Medical Tech Gear Showcase */}
        <Facilities />

        {/* Interactive FAQ Accordion Section */}
        <FAQ />

        {/* General Contacts, embed map and message portal */}
        <Contact />
      </main>

      {/* Footer Navigation Map, Newsletters, license listings */}
      <Footer />
    </>
  );
}

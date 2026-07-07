import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Acceleration Service Page
 * Design System: Red (#d00b32) + Navy Blue + White
 */

export default function Acceleration() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const services = [
    {
      title: "Pitch Deck Development",
      description: "Create compelling, investor-ready pitch decks that communicate your vision and value proposition effectively."
    },
    {
      title: "Business Plan Creation",
      description: "Develop comprehensive business plans with market analysis, financial projections, and go-to-market strategies."
    },
    {
      title: "Demo Day Preparation",
      description: "Prepare for demo days with polished presentations, investor pitches, and confidence coaching."
    },
    {
      title: "MIS Report",
      description: "Generate detailed Management Information System reports with financial modeling and KPI tracking."
    },
    {
      title: "Investor Call Readiness",
      description: "Coach founders on investor communication, Q&A preparation, and negotiation strategies."
    }
  ];

  const accelerators = [
    "Y Combinator",
    "Techstars",
    "500 Global",
    "Plug and Play",
    "Anthill Ventures",
    "T-Hub"
  ];

  const process = [
    {
      step: "01",
      title: "Program Identification",
      description: "We identify accelerator programs that align with your startup's stage, sector, and growth goals."
    },
    {
      step: "02",
      title: "Application Support",
      description: "We prepare comprehensive applications with all required materials and documentation."
    },
    {
      step: "03",
      title: "Pitch Preparation",
      description: "We develop and refine your pitch, ensuring you're ready to impress accelerator partners."
    },
    {
      step: "04",
      title: "Investor Outreach",
      description: "We facilitate introductions to relevant investors and manage investor meetings and follow-ups."
    }
  ];

  const benefits = [
    "Access to curated accelerator networks",
    "Professional pitch deck and materials",
    "Investor introduction facilitation",
    "Ongoing mentorship and guidance",
    "Demo day presentation coaching",
    "Post-acceleration investor connections"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Acceleration Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with accelerator programs and investors. We manage pitch preparation, investor outreach, and demo day readiness to maximize your funding opportunities.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              onClick={() => setInquiryOpen(true)}
            >
              Apply for Acceleration <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                How We Support Your Acceleration
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At FCAPS, we support startups in the acceleration phase by connecting them with relevant accelerator programs run by private incubation centers, venture capital firms, and angel networks. Our role is to identify the right programs, facilitate applications, and actively coordinate with investors.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A key part of our involvement is managing investor outreach—setting up calls, aligning founders with the right investors, and preparing them for effective pitching opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-gray-600 font-semibold">Accelerated Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerator Network Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Accelerator Network
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We have established relationships with leading accelerator programs across India and globally:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {accelerators.map((acc, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200 text-center">
                <p className="font-semibold text-gray-900">{acc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Acceleration Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white font-playfair font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Why Accelerate with FCAPS
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Readiness Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Investor Readiness Coaching
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                We prepare you for investor conversations with comprehensive coaching on:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Storytelling and narrative development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Q&A preparation and handling objections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Valuation and term sheet negotiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Presentation delivery and body language</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Follow-up strategies and relationship building</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-red-600">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Sample Materials Available
              </h3>
              <p className="text-gray-600 mb-6">
                We provide sample pitch decks, business plans, and investor presentations to guide your preparation and ensure alignment with investor expectations.
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                View Sample Materials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's connect you with the right accelerator programs and investors to take your startup to the next level.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => setInquiryOpen(true)}
          >
            Apply for Acceleration <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType="Acceleration"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/fcaps-logo_67a22a67.webp" alt="FCAPS Logo" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-gray-400">Strategic support and partnerships for startup growth.</p>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@fcaps.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="tel:+919876543210" className="hover:text-white transition-colors">Phone</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Faad Network Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

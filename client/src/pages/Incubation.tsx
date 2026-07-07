import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Incubation Service Page
 * Design System: Red (#d00b32) + Navy Blue + White
 */

export default function Incubation() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const supportAreas = [
    "Identifying relevant grant opportunities",
    "Application and submission support",
    "Document preparation and alignment",
    "Selection process management",
    "Stakeholder coordination"
  ];

  const grantPrograms = [
    "SISFS (Startup India Seed Fund Scheme)",
    "NIDHI PRAYAS",
    "NIDHI SSS",
    "IIM/IIT Center-specific grants",
    "University-specific grants",
    "State-specific grant programs"
  ];

  const requiredDocuments = [
    { title: "Pitch Deck", description: "Compelling presentation of your business model and vision" },
    { title: "Business Plan", description: "Detailed roadmap including market analysis and financials" },
    { title: "DPIIT Certificate", description: "Department for Promotion of Industry and Internal Trade recognition" },
    { title: "MIS Report", description: "Management Information System report with financial projections" },
    { title: "Video Pitch", description: "Professional video presentation of your startup" }
  ];

  const eligibility = [
    "Strong pitch deck + business plan + financial projections",
    "Registered as a legal entity (Pvt Ltd, LLP, or Partnership)",
    "Less than 5 years old",
    "Demonstrated traction and market validation",
    "Working on innovative product, service, or process"
  ];

  const grantRange = [
    { range: "₹10 Lakhs - ₹50 Lakhs", description: "Early-stage grants for pre-revenue startups" },
    { range: "₹50 Lakhs - ₹1 Crore", description: "Growth-stage grants for validated startups" },
    { range: "₹1 Crore+", description: "Scale-stage grants for high-growth startups" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Incubation Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access grant funding opportunities from government bodies and private institutions. We guide you through every step of the process—from identifying relevant grants to managing selections and stakeholder interactions.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              onClick={() => setInquiryOpen(true)}
            >
              Apply for Grants <ArrowRight className="w-4 h-4" />
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
                What is Incubation?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                By incubation, we at FCAPS refer to enabling startups to access grant funding opportunities from government bodies and private institutions within our network. We work closely with founders throughout the entire process.
              </p>
              <ul className="space-y-3">
                {supportAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-gray-600 font-semibold">Grant-Funded Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Programs Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Grant Focus Areas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We primarily apply to grant programs offered by leading institutions:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {grantPrograms.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
                <h3 className="font-semibold text-gray-900">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Size Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Typical Grant Ranges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {grantRange.map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg border-2 border-red-600 bg-gradient-to-br from-red-50 to-white">
                <h3 className="text-2xl font-playfair font-bold text-red-600 mb-3">
                  {item.range}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Documents We'll Help You Prepare
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {requiredDocuments.map((doc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {doc.title}
                </h3>
                <p className="text-gray-600">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Eligibility Criteria
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              To be eligible for grant programs, your startup should meet the following criteria:
            </p>
            <div className="space-y-4">
              {eligibility.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Partnerships
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            We've established partnerships with leading grant institutions through NDAs and MOUs, enabling us to receive timely updates on upcoming opportunities and provide you with the best guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["IIMs", "IITs", "AIC Centers", "Startup India", "NASSCOM", "State Governments"].map((partner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <p className="font-semibold text-gray-900">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Application Process
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    Assessment
                  </h3>
                  <p className="text-gray-600">
                    We evaluate your startup's eligibility and identify the most suitable grant programs based on your stage, sector, and requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    Preparation
                  </h3>
                  <p className="text-gray-600">
                    We prepare all required documents—pitch decks, business plans, financial projections, and video pitches—aligned with grant standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    Application
                  </h3>
                  <p className="text-gray-600">
                    We handle all applications on your behalf across relevant grant programs, ensuring complete and timely submissions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    Follow-up
                  </h3>
                  <p className="text-gray-600">
                    We manage all communications with grant institutions, schedule meetings, and coordinate the selection process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Access Grant Funding?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's identify the right grant opportunities for your startup and maximize your chances of success.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 gap-2">
            Apply for Grants <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType="Incubation"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/__manus__/fcaps-logo_67a22a67.webp" alt="FCAPS Logo" className="h-8 w-auto" />
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

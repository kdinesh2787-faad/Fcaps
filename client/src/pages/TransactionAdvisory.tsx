import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Transaction Advisory Service Page
 * Design System: Red (#d00b32) + Navy Blue + White
 */

export default function TransactionAdvisory() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const services = [
    {
      title: "SSHA (Share Subscription and Shareholders Agreement)",
      description: "Draft and negotiate comprehensive share subscription and shareholders agreements protecting all parties' interests."
    },
    {
      title: "Term Sheet Negotiation",
      description: "Expert negotiation of term sheets to secure favorable terms while maintaining investor relationships."
    },
    {
      title: "Due Diligence Support",
      description: "Complete due diligence preparation including financial, legal, technical, and operational assessments."
    }
  ];

  const transactionTypes = [
    {
      type: "Seed Funding",
      description: "Support for initial seed rounds with angel investors and early-stage VCs."
    },
    {
      type: "Series A & Beyond",
      description: "Comprehensive support for Series A, B, C, and later-stage funding rounds."
    },
    {
      type: "Mergers & Acquisitions",
      description: "End-to-end support for startup acquisitions and strategic mergers."
    },
    {
      type: "Strategic Investments",
      description: "Guidance on corporate investments and strategic partnerships."
    }
  ];

  const dueDiligenceAreas = [
    {
      area: "Financial Due Diligence",
      items: ["Revenue verification", "Expense analysis", "Financial projections", "Tax compliance", "Accounting practices"]
    },
    {
      area: "Legal Due Diligence",
      items: ["Incorporation documents", "Shareholder agreements", "IP protection", "Contracts review", "Regulatory compliance"]
    },
    {
      area: "Technical Due Diligence",
      items: ["Product architecture", "Technology stack", "Security assessment", "Scalability review", "IP ownership"]
    },
    {
      area: "Operational Due Diligence",
      items: ["Team structure", "Process documentation", "Customer contracts", "Vendor relationships", "Key person dependencies"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Transaction Planning",
      description: "We assess your transaction objectives, timeline, and requirements to develop a comprehensive strategy."
    },
    {
      step: "02",
      title: "Documentation Preparation",
      description: "We prepare all required documents including term sheets, agreements, and disclosure documents."
    },
    {
      step: "03",
      title: "Due Diligence Coordination",
      description: "We manage the due diligence process, coordinate with investors, and address queries systematically."
    },
    {
      step: "04",
      title: "Negotiation Support",
      description: "We negotiate key terms and conditions to ensure favorable outcomes for your startup."
    },
    {
      step: "05",
      title: "Closing Support",
      description: "We manage the closing process, ensure all conditions are met, and coordinate fund transfers."
    },
    {
      step: "06",
      title: "Post-Closing",
      description: "We provide support for post-closing obligations and investor onboarding."
    }
  ];

  const termSheetElements = [
    "Valuation and share price",
    "Investment amount and instrument",
    "Board representation",
    "Liquidation preferences",
    "Anti-dilution provisions",
    "Drag-along and tag-along rights",
    "Information and inspection rights",
    "Registration rights",
    "Protective provisions",
    "Vesting schedules"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Transaction Advisory
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              End-to-end support during fundraising, investments, mergers, and acquisition transactions. We guide you through every step to ensure successful deal closure.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              onClick={() => setInquiryOpen(true)}
            >
              Explore Advisory <ArrowRight className="w-4 h-4" />
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
                Expert Transaction Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transactions are complex, high-stakes events that require expert guidance. We provide comprehensive support across all transaction types to ensure favorable outcomes and smooth execution.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team has extensive experience with equity fundraising, M&A transactions, and strategic investments across multiple sectors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 font-semibold">Successful Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Core Advisory Services
          </h2>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Types Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Types of Transactions We Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {transactionTypes.map((tx, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {tx.type}
                </h3>
                <p className="text-gray-600">
                  {tx.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Comprehensive Due Diligence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dueDiligenceAreas.map((dd, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                  {dd.area}
                </h3>
                <ul className="space-y-2">
                  {dd.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Term Sheet Elements Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Term Sheet Negotiation
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                We help you understand and negotiate key term sheet elements to ensure favorable terms while maintaining investor relationships.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200">
              <h3 className="text-lg font-playfair font-bold text-gray-900 mb-4">
                Key Elements We Negotiate
              </h3>
              <ul className="space-y-2">
                {termSheetElements.slice(0, 5).map((element, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <span>{element}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              {termSheetElements.slice(5).map((element, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{element}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Transaction Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white font-playfair font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-gray-900">
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
            Why Choose FCAPS for Transaction Advisory
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Our advisors have closed 100+ transactions across various sectors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Investor Network
                  </h3>
                  <p className="text-gray-600">
                    Access to 500+ investors and strategic partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Founder-Centric Approach
                  </h3>
                  <p className="text-gray-600">
                    We prioritize your interests and long-term success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Full Support
                  </h3>
                  <p className="text-gray-600">
                    From initial planning through post-closing support.
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
            Ready to Close Your Transaction?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's work together to ensure a successful transaction that maximizes value for your startup.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => setInquiryOpen(true)}
          >
            Explore Advisory <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType="Transaction Advisory"
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

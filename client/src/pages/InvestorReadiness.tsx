import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Investor Readiness Service Page
 * Design System: Red (#d00b32) + Navy Blue + White
 */

export default function InvestorReadiness() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const services = [
    {
      title: "Pitch Calls",
      description: "Prepare for investor calls with coaching on storytelling, handling questions, and closing techniques."
    },
    {
      title: "Business Plan",
      description: "Develop comprehensive business plans with market analysis, competitive positioning, and financial projections."
    },
    {
      title: "Pitch Deck",
      description: "Create investor-ready pitch decks that communicate your vision, traction, and growth potential."
    },
    {
      title: "Video Pitch",
      description: "Produce professional video pitches for online platforms and investor portals."
    },
    {
      title: "Networking Sessions",
      description: "Facilitate introductions to relevant investors and industry leaders in your sector."
    },
    {
      title: "Demo Days",
      description: "Prepare for demo days with presentation coaching and investor meeting coordination."
    },
    {
      title: "Partnerships",
      description: "Identify and facilitate strategic partnership opportunities to strengthen your value proposition."
    },
    {
      title: "Consulting",
      description: "Receive ongoing strategic consulting on business model optimization and growth strategies."
    },
    {
      title: "MIS Report",
      description: "Generate detailed financial reports with KPIs, projections, and performance metrics."
    },
    {
      title: "DPIIT Certificate",
      description: "Assist with Department for Promotion of Industry and Internal Trade recognition."
    },
    {
      title: "Networking",
      description: "Access our network of investors, mentors, and industry experts."
    }
  ];

  const readinessChecklist = [
    "Clear and compelling business narrative",
    "Strong founding team with relevant expertise",
    "Validated product-market fit with traction",
    "Comprehensive financial projections and unit economics",
    "Clear go-to-market strategy",
    "Defined use of funds and milestones",
    "Professional pitch materials and presentations",
    "Legal structure and IP protection in place",
    "Advisory board or mentor relationships",
    "Clear understanding of target investor profiles"
  ];

  const investorTypes = [
    {
      type: "Angel Investors",
      description: "Individual investors looking for early-stage opportunities with high growth potential."
    },
    {
      type: "Venture Capital",
      description: "Professional investors providing Series A and beyond funding with operational support."
    },
    {
      type: "Corporate Investors",
      description: "Strategic investors from established companies seeking innovation and growth opportunities."
    },
    {
      type: "Government Schemes",
      description: "Subsidized funding through government initiatives like Startup India and NIDHI."
    }
  ];

  const timeline = [
    {
      phase: "Month 1-2",
      activities: "Assessment, business planning, pitch deck development"
    },
    {
      phase: "Month 2-3",
      activities: "Investor identification, networking, pitch coaching"
    },
    {
      phase: "Month 3-4",
      activities: "Investor meetings, due diligence preparation, term sheet negotiation"
    },
    {
      phase: "Month 4+",
      activities: "Closing support, post-investment onboarding"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Investor Readiness
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Prepare your startup to confidently present itself to investors with clarity, credibility, and growth potential. We ensure you have a strong foundation, clear vision, and all essential documents in place.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              onClick={() => setInquiryOpen(true)}
            >
              Get Investor Ready <ArrowRight className="w-4 h-4" />
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
                Why Investor Readiness Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Most startups approach investors without proper preparation. We ensure you're fully ready with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional materials and presentations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Clear financial projections and unit economics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Compelling founder narrative and team story</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Strong investor network and introductions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-gray-600 font-semibold">Investor-Ready Startups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Comprehensive Support Services
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
          <p className="text-center text-gray-600 mt-8 text-lg">
            Sample materials available for all services to guide your preparation.
          </p>
        </div>
      </section>

      {/* Readiness Checklist Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Investor Readiness Checklist
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              Before approaching investors, ensure you have:
            </p>
            <div className="space-y-4">
              {readinessChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 to-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Types of Investors We Connect You With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {investorTypes.map((investor, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {investor.type}
                </h3>
                <p className="text-gray-600">
                  {investor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Typical Timeline
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                      {item.phase}
                    </h3>
                    <p className="text-gray-600">
                      {item.activities}
                    </p>
                  </div>
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
            Our Investor Readiness Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Phase 1: Assessment & Planning
              </h3>
              <p className="text-gray-600">
                We evaluate your current readiness, identify gaps, and create a customized roadmap for investor preparation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Phase 2: Materials Development
              </h3>
              <p className="text-gray-600">
                We develop all investor materials including pitch decks, business plans, financial models, and video pitches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Phase 3: Coaching & Preparation
              </h3>
              <p className="text-gray-600">
                We provide intensive coaching on pitch delivery, Q&A handling, storytelling, and investor psychology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Phase 4: Investor Introductions
              </h3>
              <p className="text-gray-600">
                We facilitate introductions to relevant investors and manage the entire investor engagement process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Impress Investors?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's prepare your startup to confidently present itself to investors and secure the funding you need to grow.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => setInquiryOpen(true)}
          >
            Get Investor Ready <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType="Investor Readiness"
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

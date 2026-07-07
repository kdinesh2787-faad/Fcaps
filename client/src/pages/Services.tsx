import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Services Overview Page
 * Design System: Red (#d00b32) + Navy Blue + White
 * Showcases all four core services with links to detailed pages
 */

export default function Services() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const services = [
    {
      id: "incubation",
      title: "Incubation",
      icon: "🌱",
      shortDesc: "Access grant funding opportunities from government bodies and private institutions.",
      description: "We guide early-stage startups through the complete grant identification, application, and selection process. Our team helps you access non-dilutive funding to accelerate development.",
      features: [
        "Grant program identification and matching",
        "Application preparation and submission",
        "Compliance and reporting support",
        "Post-grant milestone tracking",
        "Networking with other startups"
      ],
      link: "/incubation",
      cta: "Explore Incubation"
    },
    {
      id: "acceleration",
      title: "Acceleration",
      icon: "⚡",
      shortDesc: "Connect with accelerator programs and investors to scale your startup.",
      description: "We connect growth-stage startups with leading accelerator programs and investor networks. Our team manages pitch preparation, investor outreach, and demo day readiness.",
      features: [
        "Accelerator program identification",
        "Pitch deck and materials development",
        "Investor introduction and outreach",
        "Demo day presentation coaching",
        "Post-acceleration investor connections"
      ],
      link: "/acceleration",
      cta: "Explore Acceleration"
    },
    {
      id: "investor-readiness",
      title: "Investor Readiness",
      icon: "🎯",
      shortDesc: "Prepare your startup to confidently present to investors with clarity and credibility.",
      description: "We ensure your startup is fully investor-ready with professional materials, financial models, and comprehensive coaching. Our support covers all aspects of investor engagement.",
      features: [
        "Business plan and financial modeling",
        "Pitch deck development",
        "Investor call preparation and coaching",
        "Due diligence documentation",
        "Term sheet negotiation support"
      ],
      link: "/investor-readiness",
      cta: "Get Investor Ready"
    },
    {
      id: "transaction-advisory",
      title: "Transaction Advisory",
      icon: "📊",
      shortDesc: "End-to-end support during fundraising, investments, mergers, and acquisitions.",
      description: "We provide comprehensive advisory throughout your transaction journey. From term sheet negotiation to closing, we ensure favorable outcomes and smooth execution.",
      features: [
        "Term sheet negotiation and structuring",
        "SSHA (Share Subscription and Shareholders Agreement) drafting",
        "Complete due diligence coordination",
        "Legal and financial documentation",
        "Post-closing support and integration"
      ],
      link: "/transaction-advisory",
      cta: "Explore Advisory"
    }
  ];

  const whyFcaps = [
    {
      title: "Experienced Team",
      description: "Our advisors have closed 100+ transactions and supported 500+ startups across multiple sectors."
    },
    {
      title: "Investor Network",
      description: "Access to 500+ investors, accelerators, and strategic partners across India and globally."
    },
    {
      title: "Founder-Centric",
      description: "We prioritize your interests and long-term success, not just quick transactions."
    },
    {
      title: "End-to-End Support",
      description: "From initial planning through post-closing, we're with you every step of the way."
    },
    {
      title: "Proven Track Record",
      description: "Our startups have raised $500M+ in funding and achieved successful exits."
    },
    {
      title: "Customized Solutions",
      description: "We tailor our services to your specific stage, sector, and growth objectives."
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
              FCAPS Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive support tailored to your startup's unique needs and growth stage. From incubation through transaction advisory, we're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-playfair font-bold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={() => {
                      setSelectedService(service.title);
                      setInquiryOpen(true);
                    }}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold gap-2 group ml-4"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FCAPS Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Why Choose FCAPS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyFcaps.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection Guide */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Which Service is Right for You?
          </h2>
          <div className="max-w-4xl">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  Early-Stage Startups (Pre-seed to Seed)
                </h3>
                <p className="text-gray-600 mb-4">
                  Start with our Incubation service to access non-dilutive grant funding and build your foundation. Then move to Investor Readiness when you're ready to raise capital.
                </p>
                <a href="/incubation" className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  Explore Incubation <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  Growth-Stage Startups (Series A+)
                </h3>
                <p className="text-gray-600 mb-4">
                  Leverage our Acceleration service to connect with investors and accelerator programs. Use Investor Readiness for Series B and beyond rounds.
                </p>
                <a href="/acceleration" className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  Explore Acceleration <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-200">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  Fundraising or M&A
                </h3>
                <p className="text-gray-600 mb-4">
                  Use our Transaction Advisory service for complete support through term sheet negotiation, due diligence, and closing. Includes investor readiness coaching.
                </p>
                <a href="/transaction-advisory" className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  Explore Transaction Advisory <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Engagement Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "We evaluate your startup's stage, needs, and goals" },
              { step: "2", title: "Planning", desc: "Create a customized roadmap for your journey" },
              { step: "3", title: "Execution", desc: "Implement services with dedicated support" },
              { step: "4", title: "Success", desc: "Achieve milestones and reach your objectives" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-playfair font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-playfair font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Choose the service that fits your startup's stage and let's work together to achieve your growth goals.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => setInquiryOpen(true)}
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType={selectedService}
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
                <li><a href="/incubation" className="hover:text-white transition-colors">Incubation</a></li>
                <li><a href="/acceleration" className="hover:text-white transition-colors">Acceleration</a></li>
                <li><a href="/investor-readiness" className="hover:text-white transition-colors">Investor Readiness</a></li>
                <li><a href="/transaction-advisory" className="hover:text-white transition-colors">Transaction Advisory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
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

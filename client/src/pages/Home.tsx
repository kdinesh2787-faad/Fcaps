import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS Website - Investment Banking for Startups
 * Design System: Modern Minimalist + Corporate Precision
 * Colors: Red (#d00b32, #ce0d2a) + Navy Blue (#001f3f) + White
 * Typography: Playfair Display (headlines) + Inter (body)
 */

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const services = [
    {
      id: "incubation",
      title: "Incubation",
      description: "Access grant funding opportunities from government bodies and private institutions. We guide you through identification, application, and selection processes.",
      icon: "🌱",
      link: "/incubation",
      cta: "Apply for Grants"
    },
    {
      id: "acceleration",
      title: "Acceleration",
      description: "Connect with accelerator programs and investors. We manage pitch preparation, investor outreach, and demo day readiness.",
      icon: "⚡",
      link: "/acceleration",
      cta: "Apply for Acceleration"
    },
    {
      id: "investor-readiness",
      title: "Investor Readiness",
      description: "Prepare your startup to confidently present to investors with clarity, credibility, and growth potential.",
      icon: "🎯",
      link: "/investor-readiness",
      cta: "Get Investor Ready"
    },
    {
      id: "transaction-advisory",
      title: "Transaction Advisory",
      description: "End-to-end support during fundraising, investments, mergers, and acquisition transactions.",
      icon: "📊",
      link: "/transaction-advisory",
      cta: "Explore Advisory"
    }
  ];

  const stats = [
    { label: "Startups Supported", value: "1000+" },
    { label: "Grant Programs Accessed", value: "50+" },
    { label: "Fund raised", value: "250cr+" },
    { label: "Investor Network", value: "10000+" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your startup's stage, goals, and unique challenges through in-depth consultation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a customized roadmap aligned with your growth objectives and market positioning."
    },
    {
      step: "03",
      title: "Execution",
      description: "Our team actively manages applications, investor outreach, and stakeholder coordination."
    },
    {
      step: "04",
      title: "Success",
      description: "We support you through closing, ensuring smooth transitions and long-term value creation."
    }
  ];

  const values = [
    {
      title: "Founder-Centric",
      description: "We prioritize your vision and growth over everything else."
    },
    {
      title: "Network-Driven",
      description: "Access to our extensive network of investors, institutions, and partners."
    },
    {
      title: "Results-Oriented",
      description: "We measure success by your achievements and growth milestones."
    },
    {
      title: "Transparent",
      description: "Clear communication and honest guidance throughout our partnership."
    }
  ];

  const handleInquiry = (service?: string) => {
    setSelectedService(service);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-red-50 border-b border-gray-200">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                Building Startup Growth <span className="text-red-600">Pathways for Founders</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                We work closely with early-stage and growth-stage startups to help them access opportunities, prepare for investors, strengthen business foundations, and accelerate growth through strategic support and partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white gap-2"
                  onClick={() => handleInquiry("General Inquiry")}
                >
                  Schedule Consultation <ArrowRight className="w-4 h-4" />
                </Button>
                <a href="/services">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full min-h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663451306120/4mKYYYEauDVinCaQDbch6P/hero-investment-banking-Cb8UA4fuYYdnFN9CYBe8gv.webp"
                alt="Investment Banking"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support tailored to your startup's unique needs and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-8 rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => handleInquiry(service.title)}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold gap-2 group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to ensure your success at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white font-playfair font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-6 w-0.5 h-24 bg-gradient-to-b from-red-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose FCAPS
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to your success with founder-centric approach and proven expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Accelerate Your Startup?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how FCAPS can support your growth journey and help you achieve your ambitious goals.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => handleInquiry("General Inquiry")}
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
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
                <li><a href="#incubation" className="hover:text-white transition-colors">Incubation</a></li>
                <li><a href="#acceleration" className="hover:text-white transition-colors">Acceleration</a></li>
                <li><a href="#investor-readiness" className="hover:text-white transition-colors">Investor Readiness</a></li>
                <li><a href="#transaction-advisory" className="hover:text-white transition-colors">Transaction Advisory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@fcaps.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="tel:+919876543210" className="hover:text-white transition-colors">Phone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Faad Network Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType={selectedService}
      />
    </div>
  );
}

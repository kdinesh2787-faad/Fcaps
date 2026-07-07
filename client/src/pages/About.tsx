import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

/**
 * FCAPS About Page
 * Design System: Red (#d00b32) + Navy Blue + White
 * Showcases company background, mission, vision, and team
 */

export default function About() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const teamMembers = [
    {
      name: "Dr. Dinesh Singh",
      title: "CoFounder and Director",
      email: "dinesh@fcaps.in",
      linkedin: "https://www.linkedin.com/in/dr-dinesh-singh",
      image: "/manus-storage/optimized-dinesh-singh_6f2bf442.png"
    },
    {
      name: "Karan Verma",
      title: "CoFounder and Director",
      email: "karan@fcaps.in",
      linkedin: "https://www.linkedin.com/in/karan-verma-51b9892",
      image: "/manus-storage/optimized-karan-verma_enhanced_445b0fdd.webp"
    },
    {
      name: "Aditya Arora",
      title: "CEO & Director",
      email: "aditya.arora@faad.in",
      linkedin: "https://www.linkedin.com/in/thefaadguy",
      image: "/manus-storage/optimized-aditya-arora_enhanced_82c3bc8d.webp"
    },
    {
      name: "Shivani Khare",
      title: "AVP Portfolio Management",
      email: "shivani.khare@faad.in",
      linkedin: "https://www.linkedin.com/in/shivani-khare-sk169",
      image: "/manus-storage/optimized-shivani-khare_enhanced_b521bd52.webp"
    },
    {
      name: "Shiksha Mishra",
      title: "Investment Professional",
      email: "shiksha@fcaps.in",
      linkedin: "https://www.linkedin.com/in/shiksha-mishra-6a1098228",
      image: "/manus-storage/optimized-shiksha-mishra-correct_79c0c8b5.png"
    },
    {
      name: "Nishtha Gandhi",
      title: "Investment Associate",
      email: "nishtha@fcaps.in",
      linkedin: "https://www.linkedin.com/in/nishtha-g-a48439205",
      image: "/manus-storage/optimized-nishtha-gandhi-correct_62183228.png"
    }
  ];

  const missionPoints = [
    "To simplify access to capital for startups and businesses.",
    "To create meaningful founder-investor relationships.",
    "To support scalable and sustainable business growth.",
    "To become a strategic long-term partner for emerging businesses."
  ];

  const coreValues = [
    {
      title: "Founder-First",
      description: "We prioritize founder success and long-term value creation over quick transactions."
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and maintain the highest ethical standards."
    },
    {
      title: "Excellence",
      description: "We deliver exceptional service and expertise across all our engagements."
    },
    {
      title: "Innovation",
      description: "We embrace new approaches and continuously improve our services."
    },
    {
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success."
    },
    {
      title: "Impact",
      description: "We measure success by the sustainable growth and success of our portfolio companies."
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
              About FCAPS
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering Founders with Capital, Strategy, and Scale.
            </p>
            <p className="text-lg text-gray-600">
              FCaps (Faad Capital Access Program & Solutions) is the Investment Banking and Capital Advisory division of Faad Network Private Limited, created with a founder-first vision to bridge the gap between ambitious businesses and the right capital opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* About Faad Capital Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            About Faad Capital
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Faad Network Private Limited is a dynamic startup and investment ecosystem focused on enabling innovation, entrepreneurship, and early-stage business growth across India.
              </p>
              <p className="text-lg text-gray-600">
                Faad Capital is a SEBI (INAIF/22-23/1175) Registered Category-I Angel Fund with a corpus of ₹300 Crore, investing across sectors from Pre-Seed to Series A stages. With a growing portfolio of startups across diverse industries, Faad has established itself as a founder-focused investment platform dedicated to identifying and supporting scalable businesses with long-term potential.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, the Faad ecosystem has supported startups through fundraising assistance, investor connections, strategic guidance, pitch readiness, and ecosystem-building initiatives, helping founders transform ideas into impactful businesses.
              </p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/manus-storage/WhatsAppImage2026-06-11at5.48.46PM_e298fd22.jpeg" alt="Faad Capital Ecosystem" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* About FCaps Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            About FCaps
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-600 mb-6">
              At FCaps, we work closely with startups, emerging businesses, and growth-stage companies to provide strategic fundraising support, investor access, financial advisory, and transaction solutions that enable sustainable growth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our approach goes beyond capital. We focus on building long-term partnerships by helping businesses strengthen their financial positioning, improve investor readiness, and create scalable growth strategies.
            </p>
            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-200 mt-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-600">
                We believe in the power of entrepreneurship and the potential of founders to create transformative businesses. Our mission is to remove barriers to capital access and provide the strategic guidance needed for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 italic">
                "To build a trusted capital advisory ecosystem that empowers founders and businesses with the right capital, strategic direction, and growth opportunities."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <ul className="space-y-3">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our team brings together deep expertise in investment banking, capital markets, startup ecosystems, and founder mentorship. We're committed to supporting your growth journey.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
                <div className="mb-4">
                  <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold text-sm">
                    {member.title}
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
            Why Work With FCaps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Founder-Centric Approach
                  </h3>
                  <p className="text-gray-600">
                    We prioritize your success and long-term value creation over quick transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Deep Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our team has extensive experience in investment banking, capital markets, and startup ecosystems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Strong Network
                  </h3>
                  <p className="text-gray-600">
                    Access to 500+ investors, accelerators, and strategic partners across India and globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Comprehensive Services
                  </h3>
                  <p className="text-gray-600">
                    From incubation through transaction advisory, we provide end-to-end support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    Our portfolio companies have raised $500M+ in funding and achieved successful exits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-gray-900 mb-2">
                    Long-Term Partnership
                  </h3>
                  <p className="text-gray-600">
                    We're invested in your success beyond the transaction.
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
            Ready to Partner With FCaps?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your startup's growth journey and help you achieve your capital and strategic objectives.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 gap-2"
            onClick={() => setIsInquiryOpen(true)}
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />

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
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@fcaps.in" className="hover:text-white transition-colors">Email</a></li>
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

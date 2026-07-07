import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import InquiryModal from "@/components/InquiryModal";

/**
 * Contact Page - FCAPS
 * Design System: Red (#d00b32) + Navy Blue + White
 * Professional contact section with inquiry form and contact details
 */

export default function Contact() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setIsLoading(true);
    try {
      // Send email using Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          service: formData.service || "Not specified",
          message: formData.message,
          from_name: "FCAPS Website",
          subject: `New Contact Form Submission from ${formData.name}`,
          to_email: "hello@fcaps.in",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Your message has been sent successfully. We'll get back to you shortly.");
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1F3A5F] to-[#2d5a8c]">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-100">
              Have questions about our services? We'd love to hear from you. Reach out to our team and let's discuss how FCAPS can support your startup's growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-playfair font-bold text-[#1F3A5F] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#d00b32] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600">Gurugram, Haryana, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#d00b32] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600"><a href="tel:+919560724993" className="hover:text-[#d00b32] transition">+91 9560724993</a></p>
                      <p className="text-gray-600"><a href="tel:+919560534993" className="hover:text-[#d00b32] transition">+91 9560534993</a></p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#d00b32] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600"><a href="mailto:hello@fcaps.in" className="hover:text-[#d00b32] transition">hello@fcaps.in</a></p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#d00b32] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday to Friday</p>
                    <p className="text-gray-600">10:00 AM – 6:00 PM</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-4">
                  <Linkedin className="w-6 h-6 text-[#d00b32] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/showcase/fcaps-faad-network-pvt-ltd/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#d00b32] transition"
                    >
                      FCAPS - FAAD Network
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-playfair font-bold text-[#1F3A5F] mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-[#d00b32]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-[#d00b32]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent"
                      disabled={isLoading}
                    >
                      <option value="">Select a service</option>
                      <option value="Incubation">Incubation</option>
                      <option value="Acceleration">Acceleration</option>
                      <option value="Investor Readiness">Investor Readiness</option>
                      <option value="Transaction Advisory">Transaction Advisory</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-[#d00b32]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d00b32] focus:border-transparent resize-none"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#d00b32] hover:bg-[#b00929] text-white font-semibold py-3 rounded-lg transition"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#d00b32] to-[#b00929]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Quick Inquiry?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Use our quick inquiry form to get in touch with our team about a specific service.
          </p>
          <Button
            onClick={() => setIsInquiryOpen(true)}
            className="bg-white text-[#d00b32] hover:bg-gray-100 font-semibold"
          >
            Open Quick Inquiry Form
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-playfair font-bold text-[#1F3A5F] mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1F3A5F] mb-3">What services does FCAPS offer?</h3>
              <p className="text-gray-600">FCAPS offers comprehensive investment banking services including incubation, acceleration, investor readiness programs, and transaction advisory for startups and emerging businesses.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1F3A5F] mb-3">How long does it take to get a response?</h3>
              <p className="text-gray-600">We typically respond to inquiries within 24-48 business hours. For urgent matters, you can call us directly at the provided phone numbers.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1F3A5F] mb-3">What is the eligibility criteria?</h3>
              <p className="text-gray-600">We work with startups at various stages - from pre-seed to Series A and beyond. Each opportunity is evaluated based on the startup's potential, market fit, and growth trajectory.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1F3A5F] mb-3">Can I schedule a call with the team?</h3>
              <p className="text-gray-600">Yes! Fill out the contact form or use our quick inquiry form to request a consultation. Our team will reach out to schedule a call at your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center text-gray-400">
          <p>&copy; 2026 Faad Network Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>

      {/* Inquiry Modal */}
      <InquiryModal 
        open={isInquiryOpen} 
        onOpenChange={setIsInquiryOpen}
      />
    </div>
  );
}

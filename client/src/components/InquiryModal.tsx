import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface InquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType?: string;
}

export default function InquiryModal({ open, onOpenChange, serviceType }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required");
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
          access_key: "2a32ea18-7b31-492e-b804-fba00f46564b", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: serviceType || "General Inquiry",
          message: formData.message,
          from_name: "FCAPS Website",
          subject: `New Inquiry from ${formData.name} - ${serviceType || "General"}`,
          to_email: "shiksha@fcaps.in",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Your inquiry has been sent successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        onOpenChange(false);
      } else {
        toast.error("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-primary">Quick Inquiry</DialogTitle>
          <DialogDescription>
            Tell us about your startup and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your startup..."
              className="w-full min-h-24"
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

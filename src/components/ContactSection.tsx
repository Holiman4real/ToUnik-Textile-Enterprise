import React, { useState, useEffect } from 'react';
import { Phone, Instagram, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactFormData, FormErrors } from '../types';
import { AdirePattern } from './AdirePattern';

interface ContactSectionProps {
  initialFabricSelection?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialFabricSelection = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    fabricPreference: initialFabricSelection,
    message: '',
    orderType: 'Personal',
  });

  useEffect(() => {
    if (initialFabricSelection) {
      setFormData((prev) => ({
        ...prev,
        fabricPreference: initialFabricSelection,
        subject: prev.subject || `Inquiry for ${initialFabricSelection}`,
      }));
    }
  }, [initialFabricSelection]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate Phone Number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid contact phone number';
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate clean network request with timeout
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        fabricPreference: '',
        message: '',
        orderType: 'Personal',
      });
      setErrors({});
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred while sending your message. Please try calling or reaching out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-gray-200/80">
      
      {/* Background Motifs */}
      <div className="absolute top-10 right-[-10%] text-[#D4AF37]/[0.05] pointer-events-none">
        <AdirePattern variant="eleko-grid" className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold uppercase tracking-widest shadow-xs">
            <AdirePattern variant="sunburst" color="#B8860B" className="w-3.5 h-3.5" />
            <span>Connect with ToUnik Textiles</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight">
            Let’s Create <span className="text-[#B8860B]">Something Unforgettable</span>
          </h2>

          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#800020] font-semibold">
            “Your custom fabric journey begins here.”
          </p>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto">
            Ready to order authentic Nigerian Adire fabrics, request custom samples, or inquire about wholesale yardage? Reach out directly using our form or instant channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            
            <div className="bg-[#FAF8F5] text-[#0B132B] p-5 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-xl space-y-5 sm:space-y-6 relative overflow-hidden card-luxury-hover">
              
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-[#D4AF37]/10 pointer-events-none">
                <AdirePattern variant="spiral" className="w-64 h-64" />
              </div>

              <div className="space-y-1.5 sm:space-y-2 relative z-10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B8860B]">Official Contact Channels</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">ToUnik Textiles</h3>
                <p className="font-serif-luxury italic text-xs sm:text-sm text-[#800020] font-semibold">
                  “Rooted in Tradition, Made for You”
                </p>
              </div>

              {/* Direct Clickable Contact List */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 relative z-10">
                
                {/* Phone Link */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  id="contact-phone-card"
                  href="tel:08053383107"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs text-gray-500 block font-medium">Direct Phone Call</span>
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors truncate block">
                      08053383107
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#008080] block font-medium">Tap to call directly</span>
                  </div>
                </motion.a>

                {/* WhatsApp Chat Link */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  id="contact-whatsapp-card"
                  href="https://wa.me/2348053383107?text=Hello%20ToUnik%20Textiles,%20I%20am%20interested%20in%20your%20authentic%20Adire%20fabrics."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#25D366] hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs text-gray-500 block font-medium">WhatsApp Direct Chat</span>
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#25D366] transition-colors truncate block">
                      08053383107
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-600 block font-medium">Instant replies & swatches</span>
                  </div>
                </motion.a>

                {/* Instagram Profile */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  id="contact-instagram-card"
                  href="https://instagram.com/graceful_adirefabrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#800020] hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#800020]/10 border border-[#800020]/30 flex items-center justify-center text-[#800020] group-hover:scale-110 transition-transform flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs text-gray-500 block font-medium">Instagram Showcase</span>
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#800020] transition-colors truncate block">
                      @graceful_adirefabrics
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-600 block font-medium">Official design catalogue</span>
                  </div>
                </motion.a>

              </div>

              {/* Note on Authenticity */}
              <div className="pt-3 sm:pt-4 border-t border-gray-200 text-xs text-gray-700 font-normal flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                <span>100% authentic master-dyed Abeokuta craftsmanship guaranteed.</span>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Interactive Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-5 sm:space-y-6">
              
              <div className="border-b border-gray-100 pb-3 sm:pb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-normal mt-1">
                  Fill out the details below and our fabric director will respond promptly with availability, pricing, and custom options.
                </p>
              </div>

              {/* Submission Success Banner */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="form-success-banner"
                  className="p-4 sm:p-5 rounded-2xl bg-[#008080]/10 border-2 border-[#008080] text-[#008080] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#008080] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#0B132B]">Message Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 font-normal leading-relaxed">
                      Thank you for contacting ToUnik Textiles. Your inquiry has been received and our team will get in touch with you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Submission Error Banner */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="form-error-banner"
                  className="p-4 sm:p-5 rounded-2xl bg-[#800020]/10 border-2 border-[#800020] text-[#800020] flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#800020] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#0B132B]">Submission Notice</h4>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 font-normal leading-relaxed">
                      {errorMessage}
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                    Full Name <span className="text-[#800020]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Olawale Ogunlana"
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm text-[#0B132B] bg-white focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-[#800020] bg-[#800020]/5 focus:ring-2 focus:ring-[#800020]'
                        : 'border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-[#800020] font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                      Email Address <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm text-[#0B132B] bg-white focus:outline-none transition-all ${
                        errors.email
                          ? 'border-[#800020] bg-[#800020]/5 focus:ring-2 focus:ring-[#800020]'
                          : 'border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#800020] font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                      Phone Number <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 08053383107"
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm text-[#0B132B] bg-white focus:outline-none transition-all ${
                        errors.phone
                          ? 'border-[#800020] bg-[#800020]/5 focus:ring-2 focus:ring-[#800020]'
                          : 'border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#800020] font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Subject & Order Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                      Subject <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Adire Batik Fabric Inquiry"
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm text-[#0B132B] bg-white focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-[#800020] bg-[#800020]/5 focus:ring-2 focus:ring-[#800020]'
                          : 'border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-[#800020] font-medium">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="orderType" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                      Order / Inquirer Type
                    </label>
                    <select
                      id="orderType"
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 bg-white text-base sm:text-sm text-[#0B132B]"
                    >
                      <option value="Personal">Personal Outfit / Aso-Ebi</option>
                      <option value="Fashion Designer">Fashion Designer / Couture</option>
                      <option value="Boutique">Boutique / Retail Wholesale</option>
                      <option value="Bulk / Event">Bulk Event / Corporate</option>
                      <option value="Custom Commission">Custom Bespoke Dyeing</option>
                      <option value="General Inquiry">General Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Fabric Preference (Optional) */}
                <div>
                  <label htmlFor="fabricPreference" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                    Fabric of Interest (Optional)
                  </label>
                  <input
                    type="text"
                    id="fabricPreference"
                    name="fabricPreference"
                    value={formData.fabricPreference}
                    onChange={handleInputChange}
                    placeholder="e.g. Adire Batik Royal Indigo Swirl, Classic Oniko, etc."
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 bg-white text-base sm:text-sm text-[#0B132B]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-1.5">
                    Message <span className="text-[#800020]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please specify yardage, preferred colors, delivery timeline, or any custom specifications..."
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm text-[#0B132B] bg-white focus:outline-none transition-all ${
                      errors.message
                        ? 'border-[#800020] bg-[#800020]/5 focus:ring-2 focus:ring-[#800020]'
                        : 'border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#800020] font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(184,134,11,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="contact-form-submit-btn"
                  disabled={isSubmitting}
                  className="min-h-[48px] w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B132B] hover:bg-[#B8860B] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#D4AF37]" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

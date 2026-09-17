'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
  isPartnership?: boolean;
  lang?: string;
}

export default function ContactForm({
  defaultSubject = '',
  isPartnership = false,
  lang = 'fr',
}: ContactFormProps) {
  const isEn = lang === 'en';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject || (isPartnership 
      ? (isEn ? 'Partnership inquiry / Sourcing' : 'Demande de partenariat / Sourcing')
      : (isEn ? 'General Inquiry' : 'Renseignement général')),
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = isEn ? 'Please provide your full name.' : 'Veuillez renseigner votre nom complet.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = isEn ? 'Please enter a valid email address.' : 'Veuillez saisir une adresse email valide.';
    }
    if (!formData.phone.trim()) {
      errs.phone = isEn ? 'Please indicate a phone number.' : 'Veuillez indiquer un numéro de téléphone.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = isEn 
        ? 'Your message must have at least 10 characters.' 
        : 'Votre message doit comporter au moins 10 caractères.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      /**
       * ======================================================================
       * ISOLATED BACKEND INTEGRATION POINT FOR FUTURE EMAIL SERVICE
       * 
       * To connect a real email service (e.g., Resend, SendGrid, custom SMTP):
       * 
       * 1. Create a Next.js API route: `/app/api/contact/route.ts`
       * 2. Send a POST request with the form data:
       * 
       *    const response = await fetch('/api/contact', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify(formData),
       *    });
       *    if (!response.ok) throw new Error('Failed to send');
       * 
       * ======================================================================
       */
      
      // Simulate API call with 1000ms network latency
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For testing error state: if the name is "Trigger Error", force error state
      if (formData.name.toLowerCase() === 'trigger error') {
        throw new Error('Forced simulation error');
      }

      setStatus('success');
    } catch (err) {
      console.error('Contact Form error:', err);
      setStatus('error');
    }
  };

  const handleWhatsAppPrefill = () => {
    const text = encodeURIComponent(
      `Bonjour Kourawy,\n\nNom: ${formData.name || 'Client'}\nObjet: ${formData.subject}\nMessage: ${formData.message || 'Je souhaite entrer en contact avec vous.'}`
    );
    window.open(`https://wa.me/224628275389?text=${text}`, '_blank');
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-white border border-[#1C3326] text-center rounded-xs shadow-sm">
        <div className="w-12 h-12 bg-[#1C3326]/10 text-[#1C3326] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-serif font-medium text-[#19201C] mb-2">
          {isEn ? 'Your message has been successfully sent.' : 'Votre message a bien été envoyé.'}
        </h3>
        <p className="text-xs sm:text-sm text-[#5E6861] max-w-md mx-auto leading-relaxed mb-6 font-light">
          {isEn
            ? 'Thank you for contacting Kourawy. Our team in Conakry is reviewing your request and will reply within 24 to 48 business hours.'
            : 'Merci pour votre prise de contact avec la maison Kourawy. Notre équipe à Conakry examine votre demande et vous répondra sous 24 à 48 heures ouvrées.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppPrefill}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1C3326] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#284735] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            {isEn ? 'Forward also on WhatsApp' : 'Transférer aussi sur WhatsApp'}
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: defaultSubject || (isEn ? 'General Inquiry' : 'Renseignement général'),
                message: '',
              });
            }}
            className="px-4 py-2.5 border border-[#E5E1D8] text-xs font-semibold uppercase tracking-wider text-[#19201C] hover:bg-[#EFECE6] transition-colors"
          >
            {isEn ? 'Send another message' : 'Envoyer un autre message'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 text-left"
      aria-label={isEn ? 'Official contact form' : 'Formulaire de contact officiel'}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-[#19201C] mb-1.5">
            {isEn ? 'Full name' : 'Nom et prénom'} <span className="text-[#A8422F]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={isEn ? 'e.g., Mamadou Diallo' : 'Ex: Mamadou Diallo'}
            className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] border text-xs sm:text-sm text-[#19201C] placeholder-[#A5AEA8] focus:outline-none focus:ring-1 ${
              errors.name ? 'border-[#A8422F] focus:ring-[#A8422F]' : 'border-[#E5E1D8] focus:ring-[#1C3326]'
            }`}
          />
          {errors.name && <p className="text-[11px] text-[#A8422F] mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-[#19201C] mb-1.5">
            {isEn ? 'Email address' : 'Adresse email'} <span className="text-[#A8422F]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={isEn ? 'e.g., contact@domain.com' : 'Ex: contact@domaine.com'}
            className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] border text-xs sm:text-sm text-[#19201C] placeholder-[#A5AEA8] focus:outline-none focus:ring-1 ${
              errors.email ? 'border-[#A8422F] focus:ring-[#A8422F]' : 'border-[#E5E1D8] focus:ring-[#1C3326]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-[#A8422F] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-medium uppercase tracking-wider text-[#19201C] mb-1.5">
            {isEn ? 'Phone / WhatsApp' : 'Téléphone / WhatsApp'} <span className="text-[#A8422F]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={isEn ? 'e.g., +224 6XX XX XX XX' : 'Ex: +224 6XX XX XX XX'}
            className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] border text-xs sm:text-sm text-[#19201C] placeholder-[#A5AEA8] focus:outline-none focus:ring-1 ${
              errors.phone ? 'border-[#A8422F] focus:ring-[#A8422F]' : 'border-[#E5E1D8] focus:ring-[#1C3326]'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-[#A8422F] mt-1">{errors.phone}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-medium uppercase tracking-wider text-[#19201C] mb-1.5">
            {isEn ? 'Inquiry Subject' : 'Sujet de la demande'}
          </label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E1D8] text-xs sm:text-sm text-[#19201C] focus:outline-none focus:ring-1 focus:ring-[#1C3326]"
          >
            <option value={isEn ? 'General Inquiry' : 'Renseignement général'}>
              {isEn ? 'General Inquiry' : 'Renseignement général'}
            </option>
            <option value={isEn ? 'Collection & Sizing Information' : 'Information collection & coupe'}>
              {isEn ? 'Collection & Sizing Information' : 'Information collection & coupe'}
            </option>
            <option value={isEn ? 'Partnership inquiry / Sourcing' : 'Demande de partenariat / Sourcing'}>
              {isEn ? 'Partnerships & Sourcing' : 'Partenariat & Sourcing industriel'}
            </option>
            <option value={isEn ? 'Press & Media' : 'Presse & Médias'}>
              {isEn ? 'Press & Media' : 'Presse & Médias'}
            </option>
            <option value={isEn ? 'Other' : 'Autre demande'}>
              {isEn ? 'Other' : 'Autre demande'}
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-[#19201C] mb-1.5">
          {isEn ? 'Message' : 'Message'} <span className="text-[#A8422F]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={isEn ? 'Describe your request or partnership idea in detail...' : 'Décrivez précisément votre demande ou votre projet de collaboration...'}
          className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] border text-xs sm:text-sm text-[#19201C] placeholder-[#A5AEA8] focus:outline-none focus:ring-1 ${
            errors.message ? 'border-[#A8422F] focus:ring-[#A8422F]' : 'border-[#E5E1D8] focus:ring-[#1C3326]'
          }`}
        />
        {errors.message && <p className="text-[11px] text-[#A8422F] mt-1">{errors.message}</p>}
      </div>

      {/* Integration notice */}
      <div className="p-3 bg-[#EFECE6]/80 text-[11px] text-[#5E6861] flex items-start gap-2 rounded-xs">
        <AlertCircle className="w-3.5 h-3.5 text-[#1C3326] shrink-0 mt-0.5" />
        <span>
          {isEn
            ? 'Submitted data is reserved exclusively for the Kourawy team (Conakry).'
            : 'Les données transmises sont réservées exclusivement à l’équipe Kourawy (Conakry).'}
          {' '}{isEn ? 'You can also reach WhatsApp customer support at' : 'Vous pouvez également contacter le standard WhatsApp au'} {siteConfig.contact.phoneDisplay}.
        </span>
      </div>

      {status === 'error' && (
        <div className="p-3 bg-[#A8422F]/10 border border-[#A8422F]/30 text-xs text-[#A8422F] flex items-start gap-2 rounded-xs">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            {isEn 
              ? 'An error occurred. Please try again.' 
              : 'Une erreur est survenue. Veuillez réessayer.'}
          </span>
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto px-7 py-3 bg-[#1C3326] text-[#FAF9F5] text-xs sm:text-sm font-medium hover:bg-[#284735] transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>
            {status === 'submitting' 
              ? (isEn ? 'Sending...' : 'Envoi en cours…') 
              : (isEn ? 'Send Message' : 'Envoyer le message')}
          </span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppPrefill}
          className="w-full sm:w-auto px-5 py-3 border border-[#1C3326] text-[#1C3326] text-xs sm:text-sm font-medium hover:bg-[#1C3326] hover:text-[#FAF9F5] transition-colors flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{isEn ? 'Open on WhatsApp' : 'Ouvrir sur WhatsApp'}</span>
        </button>
      </div>
    </form>
  );
}

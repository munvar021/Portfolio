"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export const useContactForm = () => {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [sending, setSending] = useState(false);

  const form = useForm<ContactFormData>({ mode: "onChange" });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          reply_to: data.email,
        },
        { publicKey },
      );

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return {
    ...form,
    status,
    sending,
    onSubmit,
  };
};

"use client";

import { useState } from "react";

import { submitLead } from "@/lib/api/contact";
import { trackEvent } from "@/lib/services/analytics-service";
import type { LeadInput } from "@/types";

const initialState: LeadInput = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export function useContactForm() {
  const [values, setValues] = useState<LeadInput>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField(field: keyof LeadInput, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function submit() {
    try {
      setStatus("submitting");
      setMessage("");
      const response = await submitLead(values);
      setStatus("success");
      setMessage(response.message);
      setValues(initialState);
      trackEvent("contact_submit", {
        source: "portfolio_contact_panel",
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message right now.");
    }
  }

  return {
    values,
    status,
    message,
    updateField,
    submit,
  };
}

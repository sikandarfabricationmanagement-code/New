"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
  );
}

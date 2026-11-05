import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ExternalLinks, NonAuthRoutes } from "../../url";

/** Floating WhatsApp chat button shown on every page except the portal. */
function WhatsAppButton() {
  const { pathname } = useLocation();
  const [showBubble, setShowBubble] = useState(false);

  // Show the "Chat with us" bubble a few seconds after the page opens,
  // then hide it again so it doesn't stay in the way.
  useEffect(() => {
    const showTimer = setTimeout(() => setShowBubble(true), 3000);
    const hideTimer = setTimeout(() => setShowBubble(false), 13000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (pathname.startsWith(NonAuthRoutes.portal)) return null;

  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-3">
      {showBubble && (
        <div className="hidden sm:block relative px-4 py-2 rounded-lg bg-white text-gray-800 font-graphikMedium text-sm shadow-lg border border-gray-200">
          Chat with Land Tower on WhatsApp
          <span className="absolute top-1/2 -right-1.5 -mt-1.5 w-3 h-3 rotate-45 bg-white border-r border-t border-gray-200" />
        </div>
      )}
      <a
        href={ExternalLinks.whatsApp}
        target="_blank"
        rel="noreferrer"
        title="Chat with Land Tower on WhatsApp"
        aria-label="Chat with Land Tower on WhatsApp"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-8 h-8 md:w-9 md:h-9"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.96 12.96 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3zm0 23.66c-1.96 0-3.88-.53-5.56-1.52l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.34 16c0-5.88 4.78-10.66 10.66-10.66S26.66 10.12 26.66 16 21.88 26.66 16.004 26.66zm5.85-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppButton;

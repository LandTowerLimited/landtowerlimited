import React from "react";
import { ExternalLinks } from "../../url";

/**
 * Office location map. The whole map is clickable and opens the office
 * in Google Maps (or the Maps app on phones) in a new tab.
 */
function OfficeMap({ className = "", heightClassName = "h-64" }) {
  return (
    <div className={className}>
      <a
        href={ExternalLinks.officeMapLink}
        target="_blank"
        rel="noreferrer"
        title="Open Land Tower office in Google Maps"
        className={`group relative block w-full overflow-hidden rounded-sm ${heightClassName}`}
      >
        <iframe
          title="Land Tower Limited office location"
          src={ExternalLinks.officeMapEmbed}
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="absolute bottom-3 right-3 px-4 py-2 rounded-sm bg-landTower-gold3-color text-gray-800 font-graphikMedium text-sm shadow-md transition-opacity group-hover:opacity-90">
          Get Directions
        </span>
      </a>
    </div>
  );
}

export default OfficeMap;

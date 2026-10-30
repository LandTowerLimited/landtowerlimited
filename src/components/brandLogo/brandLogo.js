import React from "react";
import LogoLight from "../../assets/img/landTowerLogoNew.png";
import LogoDark from "../../assets/img/landTowerLogoNewDark.png";

/**
 * Land Tower logo with the "We Exceed Limits..." tagline.
 * variant "light" = for dark backgrounds, "dark" = for white backgrounds.
 */
function BrandLogo({
  variant = "light",
  imageClassName = "h-14",
  taglineClassName = "text-xs",
  className = "",
}) {
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <img
        src={isDark ? LogoDark : LogoLight}
        alt="Land Tower Logo"
        title="Land Tower"
        className={`${imageClassName} w-auto`}
      />
      <span
        className={`self-stretch pl-[19%] mt-1 text-center italic font-graphikSemibold tracking-wide leading-none ${taglineClassName} ${
          isDark ? "text-[#8A6420]" : "text-landTower-gold-color"
        }`}
      >
        We Exceed Limits...
      </span>
    </div>
  );
}

export default BrandLogo;

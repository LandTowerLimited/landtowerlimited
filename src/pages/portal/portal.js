import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../components/brandLogo/brandLogo";
import { NonAuthRoutes, ExternalLinks } from "../../url";
import tiers from "./portalTiers";

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const COMPANY_EMAIL = "LandTower.Ltd@gmail.com";

const SUCCESS_MESSAGE =
  "Thank you. Your registration has been received. The Land Tower office will review it and contact you.";

/* ---------- validation ---------- */

const patterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?\d{7,15}$/,
  cac: /^(RC|BN|IT|LP|LLP)?\s*[-:]?\s*\d{3,10}$/i,
  scuml: /^[A-Za-z0-9][A-Za-z0-9/ -]{3,29}$/,
};

const formatMessages = {
  email: "Enter a valid email address, like name@company.com.",
  phone: "Enter a valid phone number with 7 to 15 digits.",
  cac: "Enter the CAC number as shown on your certificate, for example RC 1234567.",
  scuml: "Enter the SCUML number as shown on your certificate.",
};

function validateField(field, rawValue) {
  const value = (rawValue || "").trim();
  if (!value) {
    return field.requiredMessage || `Enter the ${field.label.toLowerCase()}.`;
  }
  if (field.validate === "phone") {
    const digits = value.replace(/[\s()-]/g, "");
    return patterns.phone.test(digits) ? "" : formatMessages.phone;
  }
  if (field.validate && !patterns[field.validate].test(value)) {
    return formatMessages[field.validate];
  }
  return "";
}

function emptyValues() {
  return tiers.reduce((all, tier) => {
    const values = {};
    tier.fields.forEach((field) => {
      values[field.name] = "";
    });
    return { ...all, [tier.id]: values };
  }, {});
}

/* ---------- small pieces ---------- */

const inputClass =
  "block w-full rounded-sm border bg-[#14110C] px-4 text-base text-[#F2EBDD] font-graphikRegular outline-none transition-colors duration-200 focus:border-[#EAA94B] focus:ring-1 focus:ring-[#EAA94B]";

function Field({ field, value, error, onChange, onBlur }) {
  const id = `portal-${field.name}`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [field.hint ? hintId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;
  const borderClass = error ? "border-[#E8826F]" : "border-[#3A3122]";
  let control;
  if (field.type === "textarea") {
    control = (
      <textarea
        id={id}
        name={field.name}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        onBlur={() => onBlur(field)}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy}
        required
        rows={4}
        maxLength={1000}
        className={`${inputClass} ${borderClass} py-3 resize-y min-h-[7rem]`}
      />
    );
  } else if (field.type === "select") {
    control = (
      <select
        id={id}
        name={field.name}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        onBlur={() => onBlur(field)}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy}
        required
        className={`${inputClass} ${borderClass} h-12`}
      >
        <option value="">Select an option</option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    control = (
      <input
        id={id}
        name={field.name}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        onBlur={() => onBlur(field)}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy}
        required
        type={field.type}
        autoComplete={field.autoComplete || "off"}
        maxLength={150}
        className={`${inputClass} ${borderClass} h-12`}
      />
    );
  }

  return (
    <div className={field.wide ? "md:col-span-2" : ""}>
      <label htmlFor={id} className="block">
        <span className="block mb-2 font-graphikMedium text-sm text-[#F2EBDD]">
          {field.label}
        </span>
        {control}
      </label>
      {field.hint && (
        <p
          id={hintId}
          className="mt-1.5 font-graphikRegular text-[13px] leading-5 text-[#B3A68E]"
        >
          {field.hint}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 font-graphikMedium text-sm text-[#F09A88]"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function MemberSignIn() {
  const url = ExternalLinks.memberSignInUrl;
  if (url === null || url === undefined) return null;
  if (url === "") {
    return (
      <span className="font-graphikRegular text-xs md:text-sm text-[#A89C86]">
        Member sign-in opens at launch
      </span>
    );
  }
  return (
    <a
      href={url}
      className="font-graphikMedium text-xs md:text-sm text-[#FABC68] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAA94B] rounded-sm"
    >
      Member sign-in
    </a>
  );
}

/* ---------- page ---------- */

function Portal() {
  const [tierId, setTierId] = useState("");
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [revealed, setRevealed] = useState(false);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const tier = tiers.find((t) => t.id === tierId);

  useEffect(() => {
    document.title = "Partner Registration • Land Tower";
    window.scrollTo(0, 0);
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  // Fade the form in each time a tier is chosen.
  useEffect(() => {
    if (!tierId) return undefined;
    setRevealed(false);
    const timer = setTimeout(() => setRevealed(true), 30);
    return () => clearTimeout(timer);
  }, [tierId]);

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const chooseTier = (id) => {
    setTierId(id);
    setErrors({});
    setConsentError("");
    if (status !== "sending") setStatus("idle");
    setTimeout(() => {
      if (!formRef.current) return;
      const { top } = formRef.current.getBoundingClientRect();
      if (top > window.innerHeight * 0.6) {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        formRef.current.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }
    }, 60);
  };

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [tierId]: { ...prev[tierId], [field.name]: value },
    }));
    if (errors[field.name]) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field) => {
    const value = values[tierId][field.name];
    if (value.trim() || errors[field.name] !== undefined) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: validateField(field, value),
      }));
    }
  };

  const resetForm = () => {
    setValues(emptyValues());
    setErrors({});
    setConsent(false);
    setConsentError("");
    setBotcheck(false);
    setTierId("");
    setStatus("idle");
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tier || status === "sending") return;

    const current = values[tier.id];
    const nextErrors = {};
    tier.fields.forEach((field) => {
      nextErrors[field.name] = validateField(field, current[field.name]);
    });
    setErrors(nextErrors);
    const nextConsentError = consent
      ? ""
      : "Tick the box to agree to the privacy notice before submitting.";
    setConsentError(nextConsentError);

    const firstInvalid = tier.fields.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      document.getElementById(`portal-${firstInvalid.name}`)?.focus();
      return;
    }
    if (nextConsentError) {
      document.getElementById("portal-consent")?.focus();
      return;
    }

    // Honeypot: real visitors never see or tick this box.
    if (botcheck) {
      setStatus("success");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    const nameField = tier.fields.find((field) => field.subjectName);
    const emailField = tier.fields.find((field) => field.type === "email");
    const details = {};
    tier.fields.forEach((field) => {
      const key = field.type === "email" ? "Email" : field.label;
      details[key] = current[field.name].trim();
    });

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portal registration: ${tier.subjectLabel}: ${current[
            nameField.name
          ].trim()}`,
          from_name: "Land Tower Portal",
          replyto: current[emailField.name].trim(),
          botcheck: false,
          "Registration tier": tier.subjectLabel,
          ...details,
          "Data consent":
            "Agreed to the Land Tower Limited privacy notice (Nigeria Data Protection Act 2023)",
          "Submitted from": "landtowerlimited.com/portal",
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch (error) {
      setStatus("error");
    }
  };

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-black text-[#F2EBDD] font-graphikRegular">
      <header className="border-b border-[#2E2719]">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to={NonAuthRoutes.landingPage}
            title="Land Tower Limited home"
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAA94B]"
          >
            <BrandLogo
              imageClassName="h-9 md:h-11"
              taglineClassName="text-[9px] md:text-[10px]"
            />
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">
              <MemberSignIn />
            </span>
            <Link
              to={NonAuthRoutes.landingPage}
              className="font-graphikRegular text-xs md:text-sm text-[#A89C86] hover:text-[#F2EBDD] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAA94B]"
            >
              Back to main site
            </Link>
          </div>
        </div>
        {ExternalLinks.memberSignInUrl != null && (
          <div className="md:hidden border-t border-[#1E1A12] px-5 py-2.5">
            <MemberSignIn />
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-5 md:px-8 pt-12 pb-20 md:pt-20">
        {status === "success" ? (
          <section
            ref={successRef}
            tabIndex={-1}
            aria-live="polite"
            className="outline-none py-10 md:py-16"
          >
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full border border-[#EAA94B]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#FABC68]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h1 className="mt-8 font-georgiaBold text-3xl md:text-5xl leading-tight text-[#F2EBDD]">
              Registration received
            </h1>
            <p className="mt-5 max-w-xl font-graphikRegular text-lg leading-8 text-[#D9CFBC]">
              {SUCCESS_MESSAGE}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to={NonAuthRoutes.landingPage}
                className="inline-flex justify-center items-center h-12 px-8 rounded-sm bg-[#EAA94B] text-black font-graphikSemibold transition-colors hover:bg-[#FABC68] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FABC68]"
              >
                Return to the main site
              </Link>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex justify-center items-center h-12 px-8 rounded-sm border border-[#3A3122] text-[#F2EBDD] font-graphikMedium transition-colors hover:border-[#EAA94B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAA94B]"
              >
                Register another organization
              </button>
            </div>
          </section>
        ) : (
          <>
            <h1 className="font-georgiaBold text-4xl md:text-[3.25rem] leading-[1.1] text-[#F2EBDD]">
              Register with Land Tower
            </h1>
            <p className="mt-5 max-w-xl font-graphikRegular text-base md:text-lg leading-7 md:leading-8 text-[#D9CFBC]">
              Choose how your organization would like to work with Land Tower
              Limited and complete the form. The Land Tower office reviews every
              registration and contacts you directly.
            </p>

            <fieldset className="mt-12">
              <legend className="mb-4 font-graphikMedium text-sm text-[#A89C86]">
                Choose your tier
              </legend>
              <div className="grid gap-3 md:grid-cols-3">
                {tiers.map((t) => {
                  const selected = t.id === tierId;
                  return (
                    <label
                      key={t.id}
                      htmlFor={`tier-${t.id}`}
                      className={`group relative block cursor-pointer overflow-hidden rounded-sm border p-5 md:p-6 transition-colors duration-300 ${
                        selected
                          ? "border-[#EAA94B] bg-[#1C170F]"
                          : "border-[#2E2719] bg-[#14110C] hover:border-[#5A4A2E]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-0 left-0 h-0.5 w-full origin-left bg-[#EAA94B] transition-transform duration-500 motion-reduce:transition-none ${
                          selected ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <input
                        id={`tier-${t.id}`}
                        type="radio"
                        name="tier"
                        value={t.id}
                        checked={selected}
                        onChange={() => chooseTier(t.id)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-sm peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-[#FABC68]"
                      />
                      <span className="flex items-center justify-between">
                        <span className="font-graphikMedium text-sm text-[#EAA94B]">
                          {t.tierLabel}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex items-center justify-center w-5 h-5 rounded-full border transition-colors ${
                            selected
                              ? "border-[#EAA94B] bg-[#EAA94B]"
                              : "border-[#5A4A2E]"
                          }`}
                        >
                          {selected && (
                            <span className="w-2 h-2 rounded-full bg-black" />
                          )}
                        </span>
                      </span>
                      <span className="mt-3 block font-georgiaBold text-xl md:text-2xl leading-tight text-[#F2EBDD]">
                        {t.title}
                      </span>
                      <span className="mt-2 block font-graphikRegular text-sm leading-6 text-[#A89C86]">
                        {t.description}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div ref={formRef} className="scroll-mt-6">
              {!tier && (
                <p className="mt-10 border-t border-[#2E2719] pt-8 font-graphikRegular text-sm text-[#A89C86]">
                  Select a tier above to open its registration form.
                </p>
              )}

              {tier && (
                <form
                  key={tier.id}
                  onSubmit={handleSubmit}
                  noValidate
                  className={`mt-12 border-t border-[#2E2719] pt-10 transition-all duration-500 ease-out motion-reduce:transition-none ${
                    revealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  <h2 className="font-georgiaBold text-2xl md:text-3xl text-[#F2EBDD]">
                    {tier.subjectLabel} registration
                  </h2>
                  <p className="mt-2 font-graphikRegular text-sm text-[#A89C86]">
                    All fields are required.
                  </p>

                  <div className="mt-8 grid gap-x-6 gap-y-6 md:grid-cols-2">
                    {tier.fields.map((field) => (
                      <Field
                        key={field.name}
                        field={field}
                        value={values[tier.id][field.name]}
                        error={errors[field.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    ))}
                  </div>

                  {/* Spam protection: hidden from people, bots tend to tick it. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div className="mt-10 rounded-sm border border-[#2E2719] bg-[#14110C] p-5 md:p-6">
                    <h3 className="font-graphikSemibold text-sm text-[#F2EBDD]">
                      Privacy notice
                    </h3>
                    <p className="mt-2 font-graphikRegular text-sm leading-6 text-[#A89C86]">
                      Land Tower Limited will use the details in this form only
                      to process your registration and contact you about it, in
                      line with the Nigeria Data Protection Act 2023. We do not
                      share them with third parties for marketing. To ask about
                      or remove your details, email{" "}
                      <a
                        href={`mailto:${COMPANY_EMAIL}`}
                        className="text-[#FABC68] underline underline-offset-2"
                      >
                        {COMPANY_EMAIL}
                      </a>
                      .
                    </p>
                    <label
                      htmlFor="portal-consent"
                      className="mt-4 flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        id="portal-consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (e.target.checked) setConsentError("");
                        }}
                        aria-invalid={consentError ? "true" : "false"}
                        aria-describedby={
                          consentError ? "portal-consent-error" : undefined
                        }
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#EAA94B]"
                      />
                      <span className="font-graphikRegular text-sm leading-6 text-[#F2EBDD]">
                        I agree to Land Tower Limited processing these details
                        to review my registration.
                      </span>
                    </label>
                    {consentError && (
                      <p
                        id="portal-consent-error"
                        className="mt-2 font-graphikMedium text-sm text-[#F09A88]"
                      >
                        {consentError}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="mt-6 rounded-sm border border-[#7A3B30] bg-[#2A1410] p-4 font-graphikRegular text-sm leading-6 text-[#F6C9BF]"
                    >
                      Your registration could not be sent. Check your internet
                      connection and try again. If it still fails, email your
                      details to{" "}
                      <a
                        href={`mailto:${COMPANY_EMAIL}`}
                        className="underline underline-offset-2"
                      >
                        {COMPANY_EMAIL}
                      </a>
                      .
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-8 inline-flex w-full sm:w-auto justify-center items-center h-12 px-10 rounded-sm bg-[#EAA94B] text-black font-graphikSemibold text-base transition-colors hover:bg-[#FABC68] disabled:cursor-wait disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FABC68]"
                  >
                    {status === "sending"
                      ? "Sending registration..."
                      : "Submit registration"}
                  </button>
                </form>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-[#2E2719]">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 font-graphikRegular text-xs text-[#7D7363]">
          © {year} Land Tower Limited. RC 1930480. Abuja, Nigeria.
        </div>
      </footer>
    </div>
  );
}

export default Portal;

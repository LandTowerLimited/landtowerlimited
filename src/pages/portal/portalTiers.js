/**
 * Registration tiers for the Land Tower portal (/portal).
 *
 * Each tier lists the fields its form shows, in order. To change a form,
 * edit this file only:
 *   - label:        text shown above the field (also used in the email)
 *   - type:         "text" | "email" | "tel" | "textarea" | "select"
 *   - options:      for type "select", the list of choices
 *   - validate:     "email" | "phone" | "cac" | "scuml" (optional)
 *   - hint:         small helper text under the field (optional)
 *   - requiredMessage: custom error when the field is left empty (optional)
 *   - subjectName:  true on the field used in the email subject line
 *   - wide:         true to make the field span the full form width
 */

const tiers = [
  {
    id: "investor",
    tierLabel: "Tier 1",
    title: "Investors",
    subjectLabel: "Tier 1 Investor",
    description:
      "Companies and private offices registering interest in a Land Tower allocation.",
    fields: [
      {
        name: "entityName",
        label: "Full legal entity name",
        type: "text",
        autoComplete: "organization",
        subjectName: true,
        wide: true,
      },
      {
        name: "representative",
        label: "Authorized executive representative",
        type: "text",
        autoComplete: "name",
        requiredMessage:
          "Enter the name of the authorized executive representative.",
      },
      {
        name: "email",
        label: "Corporate email address",
        type: "email",
        autoComplete: "email",
        validate: "email",
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        autoComplete: "tel",
        validate: "phone",
        hint: "Include the country code, for example +234 803 000 0000.",
      },
      {
        name: "allocationTarget",
        label: "Estimated allocation target",
        // Free text for now. When Land Tower defines the choices, change
        // type to "select" and add them, for example:
        //   type: "select",
        //   options: ["Nodes", "Master Block"],
        type: "text",
        hint: "For example, the number of Nodes or a Master Block.",
      },
    ],
  },
  {
    id: "marketer",
    tierLabel: "Tier 2",
    title: "Marketers",
    subjectLabel: "Tier 2 Marketer",
    description:
      "Registered agencies that want to market Land Tower developments as affiliates.",
    fields: [
      {
        name: "agencyName",
        label: "Affiliate agency name",
        type: "text",
        autoComplete: "organization",
        subjectName: true,
        wide: true,
      },
      {
        name: "principalMobile",
        label: "Principal contact mobile",
        type: "tel",
        autoComplete: "tel",
        validate: "phone",
        hint: "Include the country code, for example +234 803 000 0000.",
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        validate: "email",
      },
      {
        name: "cacNumber",
        label: "Registered CAC number",
        type: "text",
        validate: "cac",
        hint: "As shown on your CAC certificate, for example RC 1234567 or BN 1234567.",
      },
      {
        name: "territory",
        label: "Primary territory coverage",
        type: "text",
        hint: "The states or cities your agency covers.",
      },
    ],
  },
  {
    id: "vendor",
    tierLabel: "Tier 3",
    title: "Vendors and contractors",
    subjectLabel: "Tier 3 Vendor/Contractor",
    description:
      "Engineering firms and suppliers that want to work on Land Tower projects.",
    fields: [
      {
        name: "corporateName",
        label: "Corporate registered name",
        type: "text",
        autoComplete: "organization",
        subjectName: true,
        wide: true,
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        validate: "email",
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        autoComplete: "tel",
        validate: "phone",
        hint: "Include the country code, for example +234 803 000 0000.",
      },
      {
        name: "sector",
        label: "Specialized engineering sector",
        type: "text",
        hint: "For example civil, MEP, roofing or interior fit-out.",
      },
      {
        name: "scumlNumber",
        label: "SCUML registration number",
        type: "text",
        validate: "scuml",
        hint: "As shown on your SCUML certificate.",
      },
      {
        name: "capacity",
        label: "Core equipment and logistics capacity",
        type: "textarea",
        hint: "Key equipment you own, fleet size and the scale of work you can handle.",
        wide: true,
      },
    ],
  },
];

export default tiers;

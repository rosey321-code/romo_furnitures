// All editable text and settings live here, so changes do not need component edits.

export const site = {
  name: "ROMO",
  tagline: "Furnishers",
  year: 2026, // fixed value, because this Next.js version does not allow new Date() in a static page
  // Fill these in when ready. Empty values are handled safely by the components.
  whatsapp: "", // digits only with country code, for example 923001234567
  email: "",
  // Hero media. Leave empty to show the built in fabric rolls illustration.
  // Put compressed files in /public/media and use paths like "/media/hero.webm".
  heroVideoWebm: "",
  heroVideoMp4: "",
  heroPoster: "",
};

export const nav = [
  { label: "Fabrics", href: "#fabrics" },
  { label: "Shades", href: "#shades" },
  { label: "Warehouses", href: "#warehouses" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#quote" },
];

export const categories = [
  {
    title: "Curtain Fabrics",
    blurb: "Sheers, blackouts, linens and textured weaves in bulk rolls.",
    tone: "bg-sage text-ivory",
    swatches: ["#E9E2D3", "#C7B89A", "#8C9477", "#2B2C2A"],
  },
  {
    title: "Sofa Fabrics",
    blurb: "Durable upholstery fabrics for manufacturers and workshops.",
    tone: "bg-sand text-charcoal",
    swatches: ["#F5F2EB", "#A78F6E", "#5A6249", "#2B2C2A"],
  },
];

export const shades = [
  { name: "Ivory and Cream", color: "#E9E2D3" },
  { name: "Sand and Caramel", color: "#C7B89A" },
  { name: "Sage and Olive", color: "#5A6249" },
  { name: "Charcoal and Black", color: "#2B2C2A" },
  { name: "Earth and Rust", color: "#A8613C" },
];

export const warehouses = [
  {
    label: "Warehouse",
    title: "Lahore",
    text: "Ready stock of curtain and sofa fabrics for dealers and manufacturers in the north.",
  },
  {
    label: "Warehouse",
    title: "Karachi",
    text: "Ready stock for the southern market, with quick dispatch on bulk orders.",
  },
  {
    // TODO: confirm what Cutting Edge is with the client, then replace this text.
    label: "Facility",
    title: "Cutting Edge",
    text: "Details to be confirmed with the client.",
  },
];

export const stats = [
  { value: "02", label: "Warehouse cities" },
  { value: "02", label: "Fabric ranges" },
  { value: "B2B", label: "Bulk and wholesale" },
];

export const steps = [
  { n: "01", title: "Share your need", text: "Tell us the fabric type, quantity and city." },
  { n: "02", title: "Get samples and quote", text: "We send swatches and a clear bulk price." },
  { n: "03", title: "Confirm the order", text: "Stock is reserved from the nearest warehouse." },
  { n: "04", title: "Delivery", text: "Rolls are dispatched to your workshop or store." },
];

export const tickerWords = [
  "Fabrics",
  "Curtains",
  "Upholstery",
  "Interiors",
  "Lahore",
  "Karachi",
  "Ready Stock",
  "Bulk Orders",
];

export interface ContactAddress {
  street: string;
  formerStreetName: string;
  postalBox: string;
  city: string;
  state: string;
  country: string;
}

export interface DigitalProfile {
  fullName: string;
  givenName: string;
  familyName: string;
  initials: string;
  jobTitle: string;
  company: string;
  facility: string;
  phoneDisplay: string;
  phoneInternational: string;
  email: string | null;
  logoPath: string;
  address: ContactAddress;
}

export const profile: DigitalProfile = {
  fullName: "Mary Ogunleye",
  givenName: "Mary",
  familyName: "Ogunleye",
  initials: "MO",
  jobTitle: "Customer Care Manager",
  company: "Five Star Logistics Ltd.",
  facility: "Ro-Ro Terminal, Tin Can Island Port",
  phoneDisplay: "0803 358 4157",
  phoneInternational: "+2348033584157",
  email: "Mary.Danjuma@5Starterminal.com",
  logoPath: "/five-star-logistics-logo.png",
  address: {
    street: "4 Balogun Bisi Omidiora Road",
    formerStreetName: "Formerly Hinderer Road",
    postalBox: "P.M.B. 1001",
    city: "Apapa",
    state: "Lagos",
    country: "Nigeria",
  },
};

export const addressLines = [
  profile.address.street,
  `(${profile.address.formerStreetName})`,
  profile.address.postalBox,
  `${profile.address.city}, ${profile.address.state}, ${profile.address.country}`,
];

export const addressPlain = addressLines.join(", ");

export function getPublicSiteUrl(): string {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicitUrl) return explicitUrl.replace(/\/$/, "");

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return `https://${productionHost.replace(/\/$/, "")}`;

  const deploymentHost = process.env.VERCEL_URL?.trim();
  if (deploymentHost) return `https://${deploymentHost.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

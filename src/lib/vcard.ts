import { addressPlain, profile } from "@/config/profile";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

export function createVCard(): string {
  const fields = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(profile.familyName)};${escapeVCard(profile.givenName)};;;`,
    `FN:${escapeVCard(profile.fullName)}`,
    `ORG:${escapeVCard(profile.company)}`,
    `TITLE:${escapeVCard(profile.jobTitle)}`,
    `TEL;TYPE=WORK,VOICE:${profile.phoneInternational}`,
    ...(profile.email ? [`EMAIL;TYPE=INTERNET,WORK:${escapeVCard(profile.email)}`] : []),
    `ADR;TYPE=WORK:;;${escapeVCard(addressPlain)};;;;`,
    `NOTE:${escapeVCard(profile.facility)}`,
    "END:VCARD",
  ];

  return `${fields.join("\r\n")}\r\n`;
}

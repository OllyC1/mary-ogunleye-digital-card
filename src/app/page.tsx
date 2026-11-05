import { Building2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";
import { ProfileActions } from "@/components/profile-actions";
import { addressLines, addressPlain, getPublicSiteUrl, profile } from "@/config/profile";

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressPlain)}`;

  return (
    <main className="nfc-page">
      <div className="background-grid" aria-hidden="true" />
      <div className="background-wave" aria-hidden="true">
        <svg viewBox="0 0 900 480" fill="none">
          <path d="M-60 350C155 172 311 457 558 267C688 168 786 181 950 65" />
          <path d="M-45 414C173 238 333 503 579 328C718 229 818 237 958 133" />
        </svg>
      </div>

      <div className="nfc-shell">
        <section className="nfc-card" aria-labelledby="profile-name">
          <header className="brand-row">
            <CompanyLogo priority />
            <div className="digital-label">
              <span aria-hidden="true" />
              Digital card
            </div>
          </header>

          <div className="identity-panel">
            <div className="identity-stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <div className="monogram" aria-hidden="true">{profile.initials}</div>
            <div className="verified-label">
              <ShieldCheck aria-hidden="true" size={14} />
              Verified business contact
            </div>
            <h1 id="profile-name">{profile.fullName}</h1>
            <p className="role">{profile.jobTitle}</p>
            <p className="company">{profile.company}</p>
            <div className="facility">
              <Building2 aria-hidden="true" size={16} />
              {profile.facility}
            </div>
          </div>

          <div className="action-panel">
            <ProfileActions initialSiteUrl={getPublicSiteUrl()} />
          </div>

          <section className="details-panel" aria-labelledby="details-heading">
            <h2 id="details-heading">Contact details</h2>

            <a className="detail-row" href={`tel:${profile.phoneInternational}`}>
              <span className="detail-icon"><Phone aria-hidden="true" size={18} /></span>
              <span className="detail-copy"><small>Direct line</small><strong>{profile.phoneDisplay}</strong></span>
            </a>

            {profile.email ? (
              <a className="detail-row" href={`mailto:${profile.email}`}>
                <span className="detail-icon"><Mail aria-hidden="true" size={18} /></span>
                <span className="detail-copy"><small>Email</small><strong>{profile.email}</strong></span>
              </a>
            ) : null}

            <a className="detail-row address-detail" href={mapsUrl} target="_blank" rel="noreferrer">
              <span className="detail-icon"><MapPin aria-hidden="true" size={18} /></span>
              <span className="detail-copy">
                <small>Office</small>
                <strong>{addressLines[0]}</strong>
                <span>{addressLines.slice(1).join(" · ")}</span>
              </span>
            </a>
          </section>
        </section>

        <footer className="nfc-footer">
          <span className="status-dot" aria-hidden="true" />
          NFC digital contact card
        </footer>
      </div>
    </main>
  );
}

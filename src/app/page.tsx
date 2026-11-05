import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";
import { ProfileActions } from "@/components/profile-actions";
import { addressLines, addressPlain, getPublicSiteUrl, profile } from "@/config/profile";

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressPlain)}`;

  return (
    <main>
      <header className="topbar">
        <div className="shell topbar-inner">
          <a className="brand-link" href="#profile" aria-label={`${profile.company} — back to top`}>
            <CompanyLogo priority />
          </a>
          <div className="topbar-meta" aria-label="Profile type">
            <span>Digital contact</span>
            <i aria-hidden="true" />
            <strong>Customer Care</strong>
          </div>
        </div>
      </header>

      <section className="hero" id="profile" aria-labelledby="profile-name">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <svg className="hero-wave" viewBox="0 0 820 420" fill="none" aria-hidden="true">
          <path d="M-44 335C118 198 286 431 516 262C648 165 746 185 864 96" />
          <path d="M-32 389C147 249 302 470 539 313C670 226 766 233 871 160" />
        </svg>

        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Customer care · Ro-Ro terminal</div>
            <h1 id="profile-name">Mary<br />Ogunleye</h1>
            <div className="identity-line">
              <p>{profile.jobTitle}</p>
              <span aria-hidden="true" />
              <p>{profile.company}</p>
            </div>
            <p className="hero-intro">Professional contact at {profile.facility}, Lagos.</p>
            <ProfileActions initialSiteUrl={getPublicSiteUrl()} />
          </div>

          <aside className="executive-card" aria-label="Mary Ogunleye contact summary">
            <div className="card-reference"><span>Business contact</span><span>FSL · CC</span></div>
            <div className="card-identity">
              <div className="monogram" aria-hidden="true">{profile.initials}</div>
              <div><h2>{profile.fullName}</h2><p>{profile.jobTitle}</p></div>
            </div>
            <div className="card-rule" />
            <dl className="card-details">
              <div>
                <dt><Phone aria-hidden="true" size={18} /></dt>
                <dd><span>Direct line</span><a href={`tel:${profile.phoneInternational}`}>{profile.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt><Building2 aria-hidden="true" size={18} /></dt>
                <dd><span>Organisation</span><strong>{profile.company}</strong></dd>
              </div>
              <div>
                <dt><MapPin aria-hidden="true" size={18} /></dt>
                <dd><span>Business location</span><strong>Tin Can Island Port, Lagos</strong></dd>
              </div>
            </dl>
            <div className="verified-strip"><ShieldCheck aria-hidden="true" size={17} />Verified contact information</div>
          </aside>
        </div>
      </section>

      <div className="shell facts-rail" aria-label="Business profile summary">
        <div className="fact"><span>Organisation</span><strong>{profile.company}</strong></div>
        <div className="fact"><span>Facility</span><strong>Ro-Ro Terminal</strong></div>
        <div className="fact"><span>Port</span><strong>Tin Can Island · Lagos</strong></div>
      </div>

      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="shell">
          <div className="section-heading">
            <div className="section-index">01</div>
            <div><p>Contact details</p><h2 id="contact-heading">Direct, verified<br />and ready to save.</h2></div>
            <p className="section-copy">Use Mary&apos;s direct business line or save the complete verified profile to your device.</p>
          </div>

          <div className="contact-grid">
            <article className="contact-card primary-contact-card">
              <div className="contact-card-icon"><Phone aria-hidden="true" size={22} /></div>
              <div className="contact-card-body"><p>Telephone</p><a href={`tel:${profile.phoneInternational}`}>{profile.phoneDisplay}</a><span>{profile.phoneInternational}</span></div>
              <a className="circle-link" href={`tel:${profile.phoneInternational}`} aria-label="Call Mary Ogunleye"><ArrowUpRight aria-hidden="true" size={20} /></a>
            </article>

            {profile.email ? (
              <article className="contact-card email-contact-card">
                <div className="contact-card-icon"><Mail aria-hidden="true" size={22} /></div>
                <div className="contact-card-body">
                  <p>Email address</p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <span>Business email</span>
                </div>
                <a className="circle-link" href={`mailto:${profile.email}`} aria-label="Email Mary Ogunleye">
                  <ArrowUpRight aria-hidden="true" size={20} />
                </a>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section className="location-section" aria-labelledby="location-heading">
        <div className="shell location-layout">
          <div className="location-copy">
            <div className="section-index section-index-light">02</div>
            <p>Office location</p>
            <h2 id="location-heading">Apapa,<br />Lagos.</h2>
            <div className="address-row">
              <MapPin aria-hidden="true" size={22} />
              <address>{addressLines.map((line) => <span key={line}>{line}</span>)}</address>
            </div>
            <a className="maps-button" href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps<ArrowUpRight aria-hidden="true" size={18} /></a>
          </div>

          <div className="location-visual" aria-label={`${profile.facility}, Apapa, Lagos`}>
            <div className="map-grid" aria-hidden="true" />
            <div className="route route-one" aria-hidden="true" />
            <div className="route route-two" aria-hidden="true" />
            <div className="map-marker">
              <span><MapPin aria-hidden="true" size={21} /></span>
              <div><p>Five Star Logistics Ltd.</p><strong>Ro-Ro Terminal</strong><small>Tin Can Island Port</small></div>
            </div>
            <div className="map-coordinates" aria-hidden="true">APAPA · LAGOS · NG</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <CompanyLogo />
          <div><strong>{profile.fullName}</strong><span>{profile.jobTitle}</span></div>
          <p>Digital business card</p>
        </div>
      </footer>
    </main>
  );
}

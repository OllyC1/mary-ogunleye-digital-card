"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronRight, Download, Mail, Phone, QrCode, Share2, UserPlus, X } from "lucide-react";
import QRCode from "qrcode";
import { profile } from "@/config/profile";

interface ProfileActionsProps {
  initialSiteUrl: string;
}

type Feedback = "shared" | "copied" | "error" | null;

export function ProfileActions({ initialSiteUrl }: ProfileActionsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const siteUrl =
    typeof window !== "undefined" && window.location.hostname !== "localhost"
      ? window.location.origin
      : initialSiteUrl;

  useEffect(() => {
    QRCode.toDataURL(siteUrl, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 768,
      color: { dark: "#071C3B", light: "#FFFFFF" },
    }).then(setQrDataUrl);
  }, [siteUrl]);

  useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(null), 3200);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  const feedbackMessage = useMemo(() => {
    if (feedback === "shared") return "Profile shared.";
    if (feedback === "copied") return "Profile link copied.";
    if (feedback === "error") return "Unable to share. Please copy the address from your browser.";
    return "";
  }, [feedback]);

  async function shareProfile() {
    const shareData = {
      title: `${profile.fullName} — ${profile.company}`,
      text: `${profile.fullName}, ${profile.jobTitle} at ${profile.company}`,
      url: siteUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setFeedback("shared");
        return;
      }

      await navigator.clipboard.writeText(siteUrl);
      setFeedback("copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;

      try {
        await navigator.clipboard.writeText(siteUrl);
        setFeedback("copied");
      } catch {
        setFeedback("error");
      }
    }
  }

  function openQrCode() {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <div className="action-grid" aria-label="Contact actions">
        <a className="action-tile" href={`tel:${profile.phoneInternational}`}>
          <span className="action-icon"><Phone aria-hidden="true" size={20} strokeWidth={1.9} /></span>
          <span>Call</span>
        </a>
        {profile.email ? (
          <a className="action-tile" href={`mailto:${profile.email}`}>
            <span className="action-icon"><Mail aria-hidden="true" size={20} strokeWidth={1.9} /></span>
            <span>Email</span>
          </a>
        ) : null}
        <a className="action-tile" href="/mary-ogunleye.vcf" download>
          <span className="action-icon"><UserPlus aria-hidden="true" size={20} strokeWidth={1.9} /></span>
          <span>Save</span>
        </a>
        <button type="button" className="action-tile" onClick={shareProfile}>
          <span className="action-icon"><Share2 aria-hidden="true" size={20} strokeWidth={1.9} /></span>
          <span>Share</span>
        </button>
      </div>

      <button type="button" className="qr-trigger" onClick={openQrCode}>
        <span><QrCode aria-hidden="true" size={19} />Show profile QR code</span>
        <ChevronRight aria-hidden="true" size={18} />
      </button>

      <p className="sr-only" role="status" aria-live="polite">
        {feedbackMessage}
      </p>
      {feedbackMessage ? (
        <div className={`toast ${feedback === "error" ? "toast-error" : ""}`} role="status">
          {feedback !== "error" && <Check aria-hidden="true" size={18} />}
          {feedbackMessage}
        </div>
      ) : null}

      <dialog className="qr-dialog" ref={dialogRef} onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}>
        <div className="qr-dialog-card">
          <button
            className="dialog-close"
            type="button"
            aria-label="Close QR code"
            onClick={() => dialogRef.current?.close()}
          >
            <X aria-hidden="true" size={20} />
          </button>
          <div className="dialog-kicker">Digital contact card</div>
          <h2>Scan to connect</h2>
          <p>Open Mary&apos;s profile on another device.</p>
          <div className="qr-frame">
            {qrDataUrl ? (
              // A data URL is required so the same code can also be downloaded.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qrDataUrl} alt={`QR code for ${siteUrl}`} width="264" height="264" />
            ) : (
              <div className="qr-loading">Preparing QR code…</div>
            )}
          </div>
          <a
            className="button button-navy qr-download"
            href={qrDataUrl || undefined}
            download="mary-ogunleye-profile-qr.png"
            aria-disabled={!qrDataUrl}
          >
            <Download aria-hidden="true" size={18} />
            Save QR code
          </a>
        </div>
      </dialog>
    </>
  );
}

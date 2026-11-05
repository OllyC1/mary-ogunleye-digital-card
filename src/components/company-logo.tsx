import Image from "next/image";
import { profile } from "@/config/profile";

interface CompanyLogoProps {
  priority?: boolean;
  className?: string;
}

export function CompanyLogo({ priority = false, className = "" }: CompanyLogoProps) {
  return (
    <div className={`company-logo ${className}`}>
      <Image
        src={profile.logoPath}
        alt={`${profile.company} logo`}
        width={640}
        height={260}
        priority={priority}
        sizes="(max-width: 640px) 180px, 220px"
      />
    </div>
  );
}

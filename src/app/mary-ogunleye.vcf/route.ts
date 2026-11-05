import { createVCard } from "@/lib/vcard";

export const dynamic = "force-static";

export function GET() {
  return new Response(createVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mary-ogunleye.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}

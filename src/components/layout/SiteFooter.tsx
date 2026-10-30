import { profile } from "@/content/site";
import { VietnamClock, VietnamYear } from "@/components/layout/VietnamClock";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© <VietnamYear /> {profile.displayName}</span>
      <VietnamClock />
    </footer>
  );
}


import { auth } from "@/lib/auth";
import { WorkspaceHeader } from "@/components/portal/workspace-header";
import { SITE_DEMO_NOTICE } from "@/lib/site-config";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
];

export default async function PortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <div className="theme-portal flex min-h-screen flex-col bg-background text-foreground">
      <div className="accent-rule" aria-hidden />
      <WorkspaceHeader
        homeHref="/dashboard"
        navLinks={navLinks}
        userName={session?.user?.name ?? undefined}
        userRole="client"
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
      <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        {SITE_DEMO_NOTICE}
      </footer>
    </div>
  );
}

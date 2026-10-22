import { auth } from "@/lib/auth";
import { WorkspaceHeader } from "@/components/portal/workspace-header";
import { SITE_DEMO_NOTICE } from "@/lib/site-config";

const allNavLinks = [
  { href: "/firm/matters", label: "Matters", attorneyOnly: true },
  { href: "/firm/clients", label: "Clients", attorneyOnly: true },
  { href: "/firm/attorneys", label: "Solicitors", attorneyOnly: true },
  { href: "/firm/leads", label: "Leads", attorneyOnly: false },
  { href: "/firm/admin", label: "Admin", attorneyOnly: false },
];

export default async function FirmWorkspaceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const navLinks = allNavLinks.filter(
    (link) => !link.attorneyOnly || session?.user?.role === "attorney"
  );

  return (
    <div className="theme-portal flex min-h-screen flex-col bg-background text-foreground">
      <div className="accent-rule" aria-hidden />
      <WorkspaceHeader
        homeHref="/firm/matters"
        subtitle="Workspace"
        navLinks={navLinks}
        userName={session?.user?.name ?? undefined}
        userRole={session?.user?.role}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
      <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
      </footer>
    </div>
  );
}

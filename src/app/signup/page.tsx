import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Wordmark } from "@/components/brand/wordmark";
import { SignupForm } from "./signup-form";
import { SITE_DEMO_NOTICE } from "@/lib/site-config";

export const metadata = { title: "Create Your Client Account" };

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function SignupPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="theme-portal flex min-h-screen items-center justify-center bg-background px-6 py-12 text-foreground">
      <Card className="w-full max-w-sm">
        <Link href="/" className="flex items-center">
          <Wordmark size="md" />
        </Link>
        <h1 className="mt-6 font-display text-2xl">Create Your Client Account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Set up your own client portal access. No invitation needed. If
          your email matches a matter Crestbridge already has on
          file for you, it appears on your dashboard right away.
        </p>
        {params.error && (
          <p
            role="alert"
            className="mt-4 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            {params.error}
          </p>
        )}
        <SignupForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
        <p className="mt-6 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          {SITE_DEMO_NOTICE}
        </p>
      </Card>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Not found | Sebastian Becerra",
};

const NotFoundPage = () => (
  <main className="flex min-h-[100svh] items-center justify-center px-6">
    <div className="w-full max-w-lg">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="font-display text-[clamp(3rem,12vw,7rem)] leading-none text-foreground">
        404
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        This page doesn&apos;t exist. Either it moved or the link was wrong.
        Both happen.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--brand)]"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  </main>
);

export default NotFoundPage;

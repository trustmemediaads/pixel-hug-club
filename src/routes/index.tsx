import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import logoAsset from "../assets/logo.jpg.asset.json";

const TELEGRAM_URL = "https://t.me/+MQarWKnvjNxlMmNl";

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : initialSeconds));
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds]);

  return seconds;
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nikhil Yaar Win — Premium Telegram Signals" },
      { name: "description", content: "Daily premium signals, straight to your Telegram. Join Nikhil Yaar Win's private channel now." },
      { property: "og:title", content: "Nikhil Yaar Win — Premium Telegram Signals" },
      { property: "og:description", content: "Daily premium signals, straight to your Telegram. Join the private channel now." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nikhil Yaar Win — Premium Telegram Signals" },
      { name: "twitter:description", content: "Daily premium signals, straight to your Telegram. Join the private channel now." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nikhil Yaar Win",
          url: "/",
          description: "Daily premium signals, straight to your Telegram.",
        }),
      },
    ],
  }),
});

function Index() {
  const seconds = useCountdown(30);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-hero px-5 py-12 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,oklch(0.65_0.2_35/0.18),transparent_50%)]" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-orange via-ember to-burnt opacity-40 blur-md" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-orange/60 ring-orange-glow">
            <img
              src={logoAsset.url}
              alt="Nikhil Yaar Win logo"
              className="h-full w-full object-cover"
              width={144}
              height={144}
            />
          </div>
        </div>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
          NIKHIL YAAR WIN
        </h1>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange to-ember" />

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Daily premium signals, straight to your Telegram.
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shine-button group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange to-ember px-7 py-4 text-lg font-semibold text-orange-foreground shadow-lg shadow-orange/25 transition-all hover:scale-[1.02] hover:shadow-orange/40 active:scale-[0.98]"
        >
          <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Join Telegram
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          Free to join · One tap to open Telegram
        </p>

        <div className="mt-10 grid w-full grid-cols-2 items-center gap-4 rounded-3xl border border-border/60 bg-secondary/60 p-5 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="pulse-glow flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange bg-background/80 text-3xl font-bold text-orange">
              {seconds.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="flex flex-col items-start text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Offer ends in
            </p>
            <p className="text-sm font-medium text-cream">Seconds remaining</p>
            <span className="mt-3 inline-flex items-center rounded-full bg-ember/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-orange" />
              Live now
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

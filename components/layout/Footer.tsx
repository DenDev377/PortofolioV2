import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Left: Logo & Copyright */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-bold tracking-tighter text-foreground hover:text-primary transition-colors"
            >
              Prtf<span className="text-primary">.</span>
            </Link>
            <span className="text-border">|</span>
            <span>© {currentYear} Dendi. Semua hak dilindungi.</span>
          </div>

          {/* Right: Built with */}
          <p>
            Dibuat dengan{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

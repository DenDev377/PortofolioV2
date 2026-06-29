import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center p-4 pt-24 overflow-hidden">
        {/* Background Decor (to make glass effect visible) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />

        {/* Hero Glass Card */}
        <div className="relative z-10 max-w-4xl w-full mx-auto p-8 md:p-16 rounded-3xl border border-border/50 bg-background/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
            Open for Work
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Halo, Saya Dendi Seorang <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
              Software Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Selamat datang di portofolio saya! Saya berfokus merancang antarmuka
            UI yang menawan serta membangun sistem *backend* (CRUD) yang tangguh
            dan dapat diskalakan.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full"
            >
              <Link href="#tentang">
                Mulai Eksplorasi <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full border-border/60 bg-background/30 backdrop-blur-md"
            >
              <Link href="#projek">
                <Code className="mr-2 h-4 w-4" /> Portofolio
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />
    </>
  );
}

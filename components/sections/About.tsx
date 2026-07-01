"use client";

import { Code2, GraduationCap, Laptop, Terminal } from "lucide-react";

const journey = [
  {
    id: 1,
    period: "Masa SMP",
    title: "Awal Kenal Kode",
    description:
      "Pertama kali terjun ke dunia pemrograman. Mempelajari logika dasar hingga struktur pengkondisian, dan mulai mengenal cara membuat halaman web statis riil.",
    skills: ["C++ Dasar", "HTML", "CSS"],
    icon: <Terminal className="w-6 h-6 text-primary" />,
    color: "from-blue-500/20 to-cyan-500/0",
  },
  {
    id: 2,
    period: "Masa SMA",
    title: "Eksplorasi Framework & Logika",
    description:
      "Meningkatkan kemampuan pemecahan masalah (logic) dan melangkah ke pembuatan aplikasi web modern menggunakan ekosistem JavaScript.",
    skills: ["Python Dasar", "JavaScript Dasar", "Python Lanjutan", "React.js"],
    icon: <Laptop className="w-6 h-6 text-primary" />,
    color: "from-purple-500/20 to-pink-500/0",
  },
  {
    id: 3,
    period: "Masa Perkuliahan",
    title: "Menyelami Backend & Arsitektur",
    description:
      "Berfokus pada pengembangan backend modern, pemrograman berbasis objek yang lebih dalam, pola desain MVC (Model-View-Controller), serta API.",
    skills: ["PHP Lanjutan", "CodeIgniter", "Laravel", "Golang Dasar"],
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    color: "from-orange-500/20 to-amber-500/0",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Perjalanan{" "}
            <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Kode Saya
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Garis waktu bagaimana saya berkembang dari sekadar rasa penasaran
            dengan C++ hingga menguasai ekosistem Full-Stack modern di bangku
            kuliah.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-border -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 mt-8">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex items-center w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
                >
                  {/* Desktop Only: Empty Half to create offset effect */}
                  <div className="hidden md:block w-1/2 px-10" />

                  {/* Icon Indicator */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border-4 border-muted rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg z-10 transition-transform duration-300 hover:scale-110 hover:border-primary">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 pr-0 md:px-10">
                    <div className="group relative bg-card border shadow-sm rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      {/* Subtle Gradient Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                          {item.period}
                        </span>

                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs md:text-sm font-medium bg-secondary text-secondary-foreground rounded-md border border-border/50 shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

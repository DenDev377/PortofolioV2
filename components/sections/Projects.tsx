"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const projects = [
    {
        id: 1,
        title: "E-Commerce Gadget",
        description: "Aplikasi toko online yang dilengkapi dengan fitur keranjang belanja, manajemen produk, dan integrasi payment gateway Midtrans.",
        techStack: ["Laravel", "MySQL", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
        // Karena belum ada gambar, kita pakai warna gradien sebagai pengganti sementara
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        id: 2,
        title: "Sistem Manajemen Kas Organisasi",
        description: "Platform untuk mencatat uang kas, donasi, pengeluaran, serta fitur generate laporan otomatis dalam bentuk PDF.",
        techStack: ["Next.js", "Prisma", "PostgreSQL"],
        githubUrl: "#",
        liveUrl: "#",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        title: "Aplikasi Booking Kos Terintegrasi",
        description: "Aplikasi pencarian dan pemesanan kamar kos berbasis peta interaktif dengan fitur notifikasi realtime.",
        techStack: ["React Native", "Node.js", "MongoDB"],
        githubUrl: "#",
        liveUrl: "#",
        gradient: "from-orange-500 to-amber-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Proyek <span className="text-primary">Unggulan</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Beberapa hasil karya terbaik saya, mulai dari aplikasi web skala kecil hingga sistem manajemen yang kompleks.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >
                            {/* Image / Thumbnail Placeholder (with zoom effect) */}
                            <div className="w-full aspect-video overflow-hidden relative">
                                <div
                                    className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-110 transition-transform duration-500 ease-in-out`}
                                />
                                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold flex items-center shadow-sm">
                                        Lihat Proyek <ExternalLink className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs font-semibold bg-secondary/50 text-secondary-foreground rounded-md transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                    <Button variant="outline" size="sm" asChild className="flex-1 rounded-full">
                                        <Link href={project.githubUrl}>
                                            <GitBranch className="w-4 h-4 mr-2" /> Kode
                                        </Link>
                                    </Button>
                                    <Button size="sm" asChild className="flex-1 rounded-full">
                                        <Link href={project.liveUrl}>
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Preview
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
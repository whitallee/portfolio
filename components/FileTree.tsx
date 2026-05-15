"use client"

import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const navLinks = [
    { href: "/", label: "home.tsx" },
    { href: "/projects", label: "projects.json" },
    { href: "/contact", label: "contact.css" },
    { href: "/about", label: "about.html" },
    { href: "/resume", label: "resume.pdf" },
    { href: "/blog", label: "blog.md" },
]

export default function FileTree() {
    const path = usePathname()
    const [open, setOpen] = useState(false)
    const currentPathClass = "px-2 sm:px-16 bg-gray-900"

    return (
        <>
            {/* Desktop sidebar */}
            <div className={sourceCodePro.className + " hidden sm:flex flex-col gap-4 h-screen max-h-full border-r-2 pt-16 text-lg shrink-0"}>
                <span className="flex px-16 text-teal-500">whitcodes.dev</span>
                <div className="flex flex-col gap-4 indent-12">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} className={path === href ? currentPathClass : "px-16"} href={href}>{label}</Link>
                    ))}
                </div>
            </div>

            {/* Mobile hamburger */}
            <div className="sm:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white p-2 rounded-md bg-gray-900 border border-gray-700"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                {open && (
                    <div className={sourceCodePro.className + " absolute top-12 left-0 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden flex flex-col min-w-48 shadow-lg"}>
                        <span className="px-4 py-3 text-teal-500 text-sm border-b border-gray-700">whitcodes.dev</span>
                        <div className="flex flex-col py-1">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={`px-4 py-3 text-sm transition-colors hover:bg-gray-800 ${path === href ? "bg-gray-800 text-teal-400" : ""}`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

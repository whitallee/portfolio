"use client"

import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function FileTree() {
    const path = usePathname()
    const currentPathClass = "px-2 sm:px-16 bg-gray-900"
    return (
        <>
            <div className={sourceCodePro.className + " flex flex-col gap-4 h-screen max-h-full border-r-2 pt-16 text-sm sm:text-lg"}>
                <span className="flex px-2 sm:px-16 text-teal-500">whitcodes.dev</span>
                <div className="flex flex-col gap-4 indent-4 sm:indent-12">
                    <Link className={path === "/" ? currentPathClass : "px-2 sm:px-16"} href={"/"}>home.tsx</Link>
                    <Link className={path === "/projects" ? currentPathClass : "px-2 sm:px-16"} href={"/projects"}>projects.json</Link>
                    <Link className={path === "/contact" ? currentPathClass : "px-2 sm:px-16"} href={"/contact"}>contact.css</Link>
                    <Link className={path === "/about" ? currentPathClass : "px-2 sm:px-16"} href={"/about"}>about.html</Link>
                    <Link className={path === "/resume" ? currentPathClass : "px-2 sm:px-16"} href={"/resume"}>resume.md</Link>
                </div>
            </div>
        </>
    )
}
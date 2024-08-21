"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FileTree() {
    const path = usePathname()
    const currentPathClass = "px-16 bg-gray-900"
    return (
        <>
            <div className="flex flex-col gap-4 h-screen max-h-full border-r-2 pt-16">
                <span className="flex px-16 text-teal-500">whitcodes.dev</span>
                <div className="flex flex-col gap-4 indent-12">
                    <Link className={path === "/" ? currentPathClass : "px-16"} href={"/"}>home.tsx</Link>
                    <Link className={path === "/projects" ? currentPathClass : "px-16"} href={"/projects"}>projects.json</Link>
                    <Link className={path === "/contact" ? currentPathClass : "px-16"} href={"/contact"}>contact.css</Link>
                    <Link className={path === "/about" ? currentPathClass : "px-16"} href={"/about"}>about.html</Link>
                </div>
            </div>
        </>
    )
}
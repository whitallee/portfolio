import { ChartNoAxesCombined, Drumstick, Gem, PawPrint, Scissors, Zap, Squirrel, Trash, Trophy } from "lucide-react";
import Link from "next/link";

export default function Projects() {

    function Project({children, name, description, skills, githubLink, liveLink, hasAward}: {children: React.ReactNode, name: string, description: string, skills: string[], githubLink: string, liveLink: string, hasAward?: boolean}) {
        const skillsComponents = skills.map((skill, index) => (
            <span className="text-xs py-1 px-2 border-teal-700 border-2 rounded-full" key={index}>{skill}</span>
        ))
        return (
            <div className="w-full bg-gray-800 rounded-xl flex flex-col gap-4 pb-4 hover:scale-[1.02] transition-all duration-300 relative">
                <div className="w-full h-44 rounded-t-xl overflow-hidden">{children}</div>
                <div className="flex flex-col gap-3 px-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        {hasAward && (
                            <div className="group relative">
                                <Trophy className="w-6 h-6 text-yellow-500 cursor-pointer" />
                                <div className="absolute hidden group-hover:block bg-gray-900 p-2 rounded-lg text-sm w-48 -right-2 top-8 z-10 border border-teal-700">
                                    1st Place Overall and Best Design at RiverHacks 2025
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-gray-300">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {skillsComponents}
                    </div>
                    <div className="text-sm flex gap-4">
                        {liveLink && <Link className="underline text-teal-400" target="_blank" href={liveLink}>Visit Site</Link>}
                        {githubLink && <Link className="underline text-teal-400" target="_blank" href={githubLink}>Source Code</Link>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
            <h2 className="text-2xl sm:text-4xl pl-4">explore my projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll p-4 pr-8 pb-16 w-full">
                <Project
                    name="Brindl - Animal Family"
                    description="A clean, full-featured PWA for managing your animals, enclosures, and care routines. Track feeding schedules, repeating tasks, and enclosure needs — installable on any device with push notifications."
                    skills={["next.js 15", "typescript", "tailwind", "shadcn/ui", "tanstack query", "pwa"]}
                    githubLink="https://github.com/whitallee/animal-family-web" liveLink="https://animal-family-web.vercel.app/welcome"
                ><div className="w-full h-full bg-green-900 flex justify-center items-center"><PawPrint size={64} /></div></Project>
                <Project
                    name="Brindl - Animal Family Backend"
                    description="A REST API backend powering Brindl across all platforms, handling animal, enclosure, and task management with a focus on performance and clean architecture."
                    skills={["golang", "gorilla mux", "mysql", "jwt"]}
                    githubLink="https://github.com/whitallee/animal-family-backend" liveLink=""
                ><div className="w-full h-full bg-gray-600 flex justify-center items-center"><Squirrel size={64} /></div></Project>
                <Project
                    name="TrashMap ATX"
                    description="A site to help Austin residents report and track trash and debris in their area and organize trash pickup events"
                    skills={["huggingface", "resnet", "openai api", "austin's 311 api", "leaflet", "nextjs", "postgresql", "zod"]}
                    githubLink="https://github.com/jakekinchen/trash-mapper" liveLink="https://trashmapatx.com/landing"
                    hasAward={true}
                ><div className="w-full h-full bg-gray-900 flex justify-center items-center"><Trash size={64} /></div></Project>
                <Project
                    name="Barking Beauties"
                    description="A landing page and informational site for clients who run a pet spa"
                    skills={["nextjs", "react", "tailwind"]}
                    githubLink="https://github.com/whitallee/barkingbeauties" liveLink="https://barkingbeauties.netlify.app/"
                ><div className="w-full h-full bg-[#c376ff] flex justify-center items-center"><Scissors size={64} /></div></Project>
                <Project
                    name="Maria Elena by Milan Creations"
                    description="An eCommerce landing page as proof of concept for a client who makes custom jewelry and decor"
                    skills={["nextjs", "react", "tailwind"]}
                    githubLink="https://github.com/whitallee/maria-elena" liveLink="https://milan-creations-app-fb.web.app/"
                ><div className="w-full h-full bg-[#b169c7] flex justify-center items-center"><Gem size={64} /></div></Project>
                <Project
                    name="Stocks For Noobs"
                    description="An AI chatbot to help teach stock noobs how to begin investing"
                    skills={["nextjs", "react", "openai api", "material-ui", "clerk", "firebase"]}
                    githubLink="https://github.com/vnguye15/HeadStarter-Week-3-Project-AI-Customer-Support" liveLink=""
                ><div className="w-full h-full bg-green-600 flex justify-center items-center"><ChartNoAxesCombined size={64} /></div></Project>
                <Project
                    name="FlashMind"
                    description="A flashcard generator for learning about any topic that you&apos;d like"
                    skills={["nextjs", "react", "openai api", "material-ui", "clerk", "firebase", "stripe"]}
                    githubLink="https://github.com/cdogcoda/headstarter-week-4-flashcards" liveLink=""
                ><div className="w-full h-full bg-yellow-500 flex justify-center items-center"><Zap size={64} /></div></Project>
            </div>
        </main>
    )
}

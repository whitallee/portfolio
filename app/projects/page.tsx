import { ChartNoAxesCombined, Drumstick, Gem, PawPrint, Scissors, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

    function Project ({children, name, description, skills, githubLink, liveLink, imgSrc}: {children:React.ReactNode, name: string, description: string, skills: string[], githubLink: string, liveLink: string, imgSrc: string}) {
        const skillsComponents = skills.map((skill, index) => {
            return(
                <span className="text-xs py-1 px-2 border-teal-700 border-2 rounded-full" key={index}>{skill}</span>
            )
        })
        return (
            <div className="w-60 bg-gray-800 rounded-xl flex flex-col gap-4 pb-2">
                {/* <Image className="w-60 h-[7.5rem] object-cover rounded-xl" width={240} height={120} src={imgSrc} alt={"Screenshot of " + name} /> */}
                <div className="w-60 h-[7.5rem] rounded-xl overflow-hidden">{children}</div>
                <div className="flex flex-col gap-4 px-2">
                    <h3 className="text-xl">{name}</h3>
                    <p className="text-xs">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {skillsComponents}
                    </div>
                    <div className="text-sm flex gap-4">
                        {liveLink ? <Link className="underline text-teal-400" href={liveLink}>Visit Site</Link> : <></>}
                        {githubLink ? <Link className="underline text-teal-400" href={githubLink}>Source Code</Link> : <></>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
        <h2 className="text-4xl">explore my projects</h2>
        <div className="flex flex-wrap gap-4 overflow-y-scroll pb-16">
            <Project
                name="Animal Family"
                description="A utility website to help keep track of all your animals' needs"
                skills={["next", "react", "tailwind", "prisma", "next-auth", "postgresql", "zod"]}
                githubLink="https://github.com/whitallee/animal-family" liveLink="https://animal-family.vercel.app/" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-green-800 flex justify-center items-center scale-[3]"><PawPrint/></div></Project>
            <Project
                name="Barking Beauties"
                description="A landing page and informational site for clients who run a pet spa"
                skills={["next", "react", "tailwind"]}
                githubLink="https://github.com/whitallee/barkingbeauties" liveLink="https://bbpetsalon.com/" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-[#c376ff] flex justify-center items-center scale-[3]"><Scissors/></div></Project>
            <Project
                name="Maria Elena by Milan Creations"
                description="An eCommerce landing page as proof of concept for a client who makes custom jewelry and decor"
                skills={["next", "react", "tailwind"]}
                githubLink="https://github.com/whitallee/maria-elena" liveLink="https://milan-creations-app-fb.web.app/" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-[#b169c7] flex justify-center items-center scale-[3]"><Gem/></div></Project>
            <Project
                name="Stocks For Noobs"
                description="An AI chatbot to help teach stock noobs how to begin investing"
                skills={["next", "react", "openai api", "material-ui", "clerk", "firebase"]}
                githubLink="https://github.com/vnguye15/HeadStarter-Week-3-Project-AI-Customer-Support" liveLink="https://stocksfornoobs.com/" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-green-600 flex justify-center items-center scale-[3]"><ChartNoAxesCombined/></div></Project>
            <Project
                name="FlashMind"
                description="A flashcard generator for learning about any topic that you'd like"
                skills={["next", "react", "openai api", "material-ui", "clerk", "firebase", "stripe"]}
                githubLink="https://github.com/cdogcoda/headstarter-week-4-flashcards" liveLink="" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-yellow-500 flex justify-center items-center scale-[3]"><Zap/></div></Project>
            <Project
                name="Whit's Pantry"
                description="A utility website for tracking what's in my pantry"
                skills={["next", "react", "openai api", "material-ui", "firebase", "firestore"]}
                githubLink="https://github.com/whitallee/pantry-tracker" liveLink="https://whit-pantry-tracker.vercel.app/" imgSrc="/placeholder.jpg"
            ><div className="w-full h-full bg-yellow-900 flex justify-center items-center scale-[3]"><Drumstick/></div></Project>
        </div>
    </main>
    )
}
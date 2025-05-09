import { Backpack, Bot, BrainCircuit, Computer, Cross, Trophy, University } from "lucide-react"

export default function Projects() {
    function TimelineConnector(){
        return(<div className="h-16 w-1 rounded-full bg-teal-500"></div>)
    }

    function TimelineItem({date, name, description, reverse, children}: {date: string, name: string, description: string, reverse: boolean, children: React.ReactNode}){
        return(
            <div className={reverse ? "w-full flex flex-col-reverse sm:flex-row-reverse gap-1 sm:gap-4 text-lg items-center" : "w-full flex flex-col-reverse sm:flex-row gap-1 sm:gap-4 text-lg items-center"}>
                <div className={reverse ? "flex-1 text-center sm:text-left" : "flex-1 text-center sm:text-right"}><><h3>{name}</h3><p className="text-xs pb-2 sm:pb-0">{description}</p></></div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">{children}</div>
                <div className={reverse ? "flex-1 text-center sm:text-right" : "flex-1 text-center sm:text-left"}>{date}</div>
            </div>
        )
    }

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
        <h2 className="text-2xl sm:text-4xl pr-2 sm:pr-16">about me</h2>
        <div className="text-xl sm:text-2xl flex flex-col overflow-y-scroll pb-16">
            <p className="pr-2 sm:pr-16">My name is Whit Allee. I am a driven software engineer, self-taught, and highly motivated to grow and learn new things. If you&apos;d like to know about how I got here, feel free to scroll through my journey below.</p>
            <div className="flex flex-col w-full items-center pt-8 pr-2 sm:pr-16">
                <span className="py-4">Today</span>
                <TimelineConnector/>
                <TimelineItem
                    date="April 2025"
                    name="1st Place at RiverHacks 2025 Hackathon"
                    description="I won 1st place overall and 1st place for best overall design at RiverHacks 2025 with my project, 'TrashMapper ATX'. This was a great opportunity to showcase my skills and work with a team to build a project that I am proud of. Check it out in the 'projects.json' tab"
                    reverse={true}
                ><Trophy/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="July-September 2024"
                    name="Headstarter AI Fellowship"
                    description="I joined this fellowship between semesters where I built 5 AI projects in 5 weeks. This was also a great opportunity to gain experience working with team mates and collaborating with others in a git repository."
                    reverse={false}
                ><BrainCircuit/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2024 - currently attending"
                    name="Austin Community College"
                    description="I am currently obtaining my degree in Software Development, with a passion for learning and a drive to achieve my goal of becoming a great Software Engineer."
                    reverse={true}
                ><University/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2022"
                    name="Harvard EDx CS50"
                    description="I started my professional coding education by taking Harvard&apos;s intro to computer science course, building a strong foundation for a future in tech."
                    reverse={false}
                ><Computer/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2019 - 2021"
                    name="Texas A&M University"
                    description="I left Texas A&M University after COVID-19 left students, professors, and the state of classes in disarray. This was my opportunity to start fresh and find my passion, which would eventually be software development."
                    reverse={true}
                ><Cross/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2018"
                    name="High School Programming Class"
                    description="This class, mainly focused on Java fundamentals, gave me an inkling of love for coding that grew over the years. My teacher, Coach Greene, will always remain an integral part of where I am today."
                    reverse={false}
                ><Backpack/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2010"
                    name="Lego Robotics Club"
                    description="As a young kid, I loved playing with Legos, and this extra-curricular offered by my school unknowingly kickstarted a life time of programming by teaching me how to think like a coder, by sending instructions to Lego robots."
                    reverse={true}
                ><Bot/></TimelineItem>
            </div>
        </div>
    </main>
    )
}
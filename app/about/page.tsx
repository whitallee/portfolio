import { Backpack, Bot, BrainCircuit, Computer, Cross, University } from "lucide-react"

export default function Projects() {
    function TimelineConnector(){
        return(<div className="h-16 w-1 rounded-full bg-teal-500"></div>)
    }

    function TimelineItem({date, name, description, reverse, children}: {date: string, name: string, description: string, reverse: boolean, children: React.ReactNode}){
        return(
            <div className="w-full flex gap-4 text-lg items-center">
                <div className="flex-1 text-right">{reverse ? date : (<><h3>{name}</h3><p className="text-xs">{description}</p></>)}</div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">{children}</div>
                <div className="flex-1 text-left">{reverse ? (<><h3>{name}</h3><p className="text-xs">{description}</p></>) : date}</div>
            </div>
        )
    }

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
        <h2 className="text-4xl">learn more about me</h2>
        <div className="text-2xl flex flex-col overflow-y-scroll pb-16">
            <p className="pr-16">My name is Whit Allee. I am a driven software engineer, self-taught, and highly motivated to grow and learn new things. If you'd like to know about how I got here, feel free to scroll through my journey below.</p>
            <div className="flex flex-col w-full items-center pt-8 pr-16">
                <span className="py-4">Today</span>
                <TimelineConnector/>
                <TimelineItem
                    date="2024 - currently attending"
                    name="Headstarter AI Fellowship"
                    description="I am tasked at building 5 AI projects in 5 weeks and a final project with a goal to acquire 1000 users or $1000 in revenue."
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
                    description="I started my professional coding education by taking Harvard's intro to computer science course, building a strong foundation for a future in tech."
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
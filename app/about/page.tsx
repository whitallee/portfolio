import { Backpack, Bot, BrainCircuit, Briefcase, Computer, Cross, Dog, Laptop, ShoppingCart, Trophy, University, MonitorCog, Users } from "lucide-react"

export default function Projects() {
    function TimelineConnector(){
        return(<div className="h-16 w-1 rounded-full bg-teal-500"></div>)
    }

    function TimelineItem({date, name, description, reverse, children}: {date: string, name: string, description: string, reverse: boolean, children: React.ReactNode}){
        return(
            <div className={reverse ? "w-full flex flex-col-reverse sm:flex-row-reverse gap-1 sm:gap-4 text-lg items-center" : "w-full flex flex-col-reverse sm:flex-row gap-1 sm:gap-4 text-lg items-center"}>
                <div className={reverse ? "flex-1 text-center sm:text-left" : "flex-1 text-center sm:text-right"}><><h3>{name}</h3><p className="text-xs pb-2 sm:pb-0">{description}</p></></div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shrink-0">{children}</div>
                <div className={reverse ? "flex-1 text-center sm:text-right" : "flex-1 text-center sm:text-left"}>{date}</div>
            </div>
        )
    }

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
        <h2 className="text-2xl sm:text-4xl pr-2 sm:pr-16">about me</h2>
        <div className="text-xl sm:text-2xl flex flex-col overflow-y-scroll pb-16">
            <p className="pr-2 sm:pr-16">My name is Whit Milan. I am a driven software engineer, self-taught, and highly motivated to grow and learn new things. If you&apos;d like to know about how I got here, feel free to scroll through my journey below.</p>
            <div className="flex flex-col w-full items-center pt-8 pr-2 sm:pr-16">
                <span className="py-4">Today</span>
                <TimelineConnector/>
                <TimelineItem
                    date="December 2025 - February 2026"
                    name="Internship with Bart Decrem at Kochito Labs"
                    description="I worked closely with an experienced Founder to explore new AI concepts and build prototypes. All while working remotely, I built new AI workflows centered around agentic loops and experimenting with new models. Bart and I worked closely to ideate product ideas and distill the benefits and shortcomings of LLM-powered development."
                    reverse={true}
                ><MonitorCog/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="August 2025 - present"
                    name="Software Initiative at H-E-B"
                    description="I started an internal software initiative at H-E-B to show coworkers the power we have to build anything. Twice a month I host meetups where we collaborate on software projects, share ideas, and help beginners take their first steps into development."
                    reverse={false}
                ><Users/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="April 2025"
                    name="1st Place at RiverHacks 2025 Hackathon"
                    description="I won 1st place overall and 1st place for best overall design at RiverHacks 2025 with my project, 'TrashMapper ATX'. This was a great opportunity to showcase my skills and work with a team to build a project that I am proud of. Check it out in the 'projects.json' tab."
                    reverse={true}
                ><Trophy/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="July - September 2024"
                    name="Headstarter AI Fellowship"
                    description="I joined this fellowship between semesters where I built 5 AI projects in 5 weeks. This was also a great opportunity to gain experience working with teammates and collaborating with others on Github."
                    reverse={false}
                ><BrainCircuit/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2024 - currently attending"
                    name="Austin Community College"
                    description="I am currently obtaining my A.A.S. in Computer Programming, building a formal foundation to complement my self-taught experience and drive to become a great Software Engineer."
                    reverse={true}
                ><University/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="June 2023 - present"
                    name="Sales Demo Specialist/Lead at H-E-B"
                    description="While pursuing software engineering full-time, I worked as a Sales Demo Specialist and acting Lead at H-E-B. I grew the Sunday Freebie Promo at Round Rock 02 to the #1 ranking in Central Texas for Freebie Redemptions — a testament to the same data-driven thinking I bring to software."
                    reverse={false}
                ><ShoppingCart/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="February - May 2023"
                    name="Team Lead at Petbar"
                    description="Briefly served as Team Lead and Receptionist at a pet grooming spa, managing daily operations and scheduling for the team before transitioning fully into tech."
                    reverse={true}
                ><Dog/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="January 2023 - present"
                    name="Self-Employed Software Developer"
                    description="I began taking on freelance and personal software development projects — designing, building, and shipping full-stack web applications for clients and for myself. This is where I truly became a developer."
                    reverse={false}
                ><Laptop/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="2022"
                    name="Harvard EDx CS50"
                    description="I started my professional coding education by taking Harvard&apos;s intro to computer science course, building a strong foundation for a future in tech."
                    reverse={true}
                ><Computer/></TimelineItem>
                <TimelineConnector/>
                <TimelineItem
                    date="February - October 2022"
                    name="General Manager at Pet Supplies Plus"
                    description="Before pivoting to tech, I managed an entire retail store as General Manager — overseeing staff, operations, inventory, and customer relations. This experience gave me a strong foundation in leadership and problem-solving that I carry into every engineering role."
                    reverse={false}
                ><Briefcase/></TimelineItem>
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
                    description="As a young kid, I loved playing with Legos, and this extra-curricular offered by my school unknowingly kickstarted a lifetime of programming by teaching me how to think like a coder, by sending instructions to Lego robots."
                    reverse={true}
                ><Bot/></TimelineItem>
            </div>
        </div>
    </main>
    )
}

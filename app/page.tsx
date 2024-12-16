import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen max-h-screen flex items-center overflow-hidden gap-4 pl-4 pr-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-6xl">Whit Allee</h1>
        <h2 className="text-xl sm:text-3xl">Full Stack Web Developer <span className="animate-cursor-blink text-teal-800">|</span></h2>
        <div className="py-2 flex flex-col sm:flex-row gap-4">
          <Link className="border-2 border-teal-800 p-2 bg-teal-800 hover-glow text-center" href="/projects">View Work</Link>
          <Link className="border-2 border-teal-800 p-2 hover-glow text-center" href="/contact">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}

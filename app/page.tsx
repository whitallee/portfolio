import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen max-h-screen flex items-center overflow-hidden gap-4 pl-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">Whit Allee</h1>
        <h2 className="text-3xl">Full Stack Web Developer<span className="animate-ping text-teal-800">|</span></h2>
        <div className="py-2 flex gap-4">
          <Link className="border-2 border-teal-800 p-2 bg-teal-800 hover-glow" href="/projects">View Work</Link>
          <Link className="border-2 border-teal-800 p-2 hover-glow" href="/contact">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}

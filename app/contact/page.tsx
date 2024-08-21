import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
        <h2 className="text-4xl">reach out anytime</h2>
        <div className="text-2xl flex flex-col">
            <span className="text-teal-700">.socials <span className="text-white">&#10100;</span></span>
            <span className="indent-12">email: <Link href="mailto:whitallee@gmail.com" className="text-teal-400 text-glow">whitallee@gmail.com</Link></span>
            <br></br>
            <span className="indent-12">github: <Link href="https://github.com/whitallee" className="text-teal-400 text-glow">whitallee</Link></span>
            <span className="indent-12">linkedin: <Link href="https://www.linkedin.com/in/whit-allee-web-developer/" className="text-teal-400 text-glow">whit-allee-web-developer</Link></span>
            <br></br>
            <span className="indent-12">x/twitter: <Link href="https://x.com/AlleeWhit" className="text-teal-400 text-glow">@AlleeWhit</Link></span>
            <span className="indent-12">instagram: <Link href="https://www.instagram.com/whit_allee/" className="text-teal-400 text-glow">@whit_allee</Link></span>
            <span className="text-white">&#10101;</span>
        </div>
    </main>
  );
}
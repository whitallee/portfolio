export default function Resume() {
  return (
    <main className="h-screen flex flex-col gap-4 pt-8 pb-8 pr-2 sm:pr-8 lg:pr-16">
      <div className="flex justify-center">
        <a
          href="/WhitAlleeMilan_Resume.pdf"
          download
          className="inline-flex items-center px-4 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
      <iframe
        src="/WhitAlleeMilan_Resume.pdf"
        className="flex-1 w-full rounded-lg"
        title="Whit Allee-Milan Resume"
      />
    </main>
  );
}

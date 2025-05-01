import Link from "next/link";

export default function Resume() {
  return (
    <div className="max-w-3xl p-8 bg-white rounded-lg mt-8 h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Download Button */}
      <div className="flex justify-center mb-6">
        <a
          href="/Whit_Allee_Resume.pdf"
          download
          className="inline-flex items-center px-4 py-2 bg-[#AC7BAE] text-white rounded-md hover:bg-[#9a6a9c] transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">

            <div className="flex items-center">
                <div className="w-16 h-16 bg-[#AC7BAE] text-white flex items-center justify-center text-2xl font-bold mr-4">
                    W/A
                </div>
                <h1 className="text-3xl font-semibold text-[#AC7BAE] inline-block">Whit<br/>Allee</h1>
            </div>
            
            <div className="text-gray-600">
                <p>Austin, TX 78730</p>
                <p>512-769-6224</p>
                <p>whitallee@gmail.com</p>
            </div>

      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#AC7BAE] mb-4">Professional Summary</h2>
        <p className="text-gray-700">
          Highly motivated and thorough self-taught Software Developer with 2 and a half years of web and software development experience. 
          Architects backend, web, and mobile applications. Offers a practical and sales-focused perspective to the team, given a past in 
          retail leadership/management and sales. Dedicated to a passion for learning more, collaborating, and honing my craft. 
          Portfolio at <a href="https://whitcodes.dev" className="text-[#AC7BAE] hover:underline">whitcodes.dev</a>
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#AC7BAE] mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Golang",
            "Javascript(Typescript) / HTML / CSS",
            "React.js",
            "Git/Github Version Control",
            "Front-End Responsive Development",
            "REST API and DB Development",
            "AWS Familiarity",
            "Testing and debugging skills"
          ].map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="w-2 h-2 bg-[#AC7BAE] rounded-full mr-2"></span>
              <span className="text-gray-700 text-wrap">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8 text-gray-700">
        <h2 className="text-xl font-semibold text-[#AC7BAE] mb-4">Experience</h2>
        
        {/* Software Developer */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">Software Developer</h3>
              <p className="text-gray-600">Self-Employed | Austin, TX</p>
            </div>
            <p className="text-gray-600">January 2023 - Current</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Designed, tested and debugged applications from foundation to full production.</li>
            <li>Collaborated, ideated, and communicated with clients in order to make a product that complies with their design requirements.</li>
            <li>Detected problems provided by client's feedback and implemented solutions.</li>
            <li>Acquired new skills and understanding of libraries to implement in projects whenever necessary.</li>
            <li>Constructed and managed back end server logic protocols and database connections.</li>
          </ul>
        </div>

        {/* Sales Demo Specialist/Lead */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">Sales Demo Specialist/Lead</h3>
              <p className="text-gray-600">H-E-B | Austin, TX</p>
            </div>
            <p className="text-gray-600">June 2023 - Current</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Served product samples to customers browsing inside stores or at special events.</li>
            <li>Established and grew the Sunday Freebie Promo at H-E-B Round Rock 02 (373) to the #1 ranking in Central Texas for Freebie Redemptions through the H-E-B app</li>
            <li>Encouraged purchases with consultative and suggestive sales techniques.</li>
            <li>Answered customers' questions and redirected concerns toward benefits of products.</li>
            <li>Note: Promoted from Sales Demo Rep to Sales Demo Specialist before being the acting Sales Demo Lead</li>
          </ul>
        </div>

        {/* Team Lead/Receptionist */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">Team Lead/Receptionist</h3>
              <p className="text-gray-600">Petbar inc | Austin, TX</p>
            </div>
            <p className="text-gray-600">February 2023 - May 2023</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Guided my team thru the day while handling possibly difficult situations between customers and fellow employees.</li>
            <li>Scheduled appointments for my team to fit their scheduling needs with exceptional communication skills.</li>
            <li>Monitored team operations and workflow during busy periods, making adjustments to improve pace.</li>
            <li>Anticipated guest needs, delivering high-end customer service to exceed expectations.</li>
          </ul>
        </div>

        {/* General Manager */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">General Manager</h3>
              <p className="text-gray-600">Pet Supplies Plus | Austin, TX</p>
            </div>
            <p className="text-gray-600">February 2022 - October 2022</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Trained and mentored new employees, from onboarding to career growth.</li>
            <li>Conducted periodic performance reviews to assess employee performance.</li>
            <li>Resolved escalated customer complaints and answered questions regarding policies and procedures.</li>
            <li>Reviewed financial statements and activity reports to measure productivity or goal achievement.</li>
            <li>Note: spent first month with this company as a team member</li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#AC7BAE] mb-4">Awards</h2>
        <div className="text-gray-700">
          <p className="font-semibold">RiverHacks 2025 Hackathon: TrashMapperATX</p>
          <ul className="list-disc list-inside space-y-1">
            <li>1st Place Overall</li>
            <li>Best Design</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8 text-gray-700">
        <h2 className="text-xl font-semibold text-[#AC7BAE] mb-4">Education</h2>
        
        {/* ACC Software Development */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Bachelor of Science (B.S.) - Software Development</h3>
              <p className="text-gray-600">Austin Community College | Austin, TX</p>
            </div>
            <p className="text-gray-600">In Progress</p>
          </div>
        </div>

        {/* ACC Computer Programming */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Associate in Applied Science (A.A.S.) - Computer Programming</h3>
              <p className="text-gray-600">Austin Community College | Austin, TX</p>
            </div>
            <p className="text-gray-600">In Progress</p>
          </div>
        </div>

        {/* Headstarter AI Fellowship */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Headstarter AI Fellowship</h3>
              <p className="text-gray-600">Online</p>
            </div>
          </div>
          <p className="text-gray-700">7-week fellowship with projects and heavy team collaboration every week.</p>
        </div>

        {/* Harvard CS50 */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Certification - CS50</h3>
              <p className="text-gray-600">Harvard University | Online</p>
            </div>
          </div>
        </div>

        {/* Texas A&M */}
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Texas A&M University</h3>
              <p className="text-gray-600">College Station, TX</p>
            </div>
          </div>
          <p className="text-gray-700">
            Completed 2 years of Pre-Med schooling (paused due to COVID). This lead to my discovery for my passion for Software Engineering, 
            which I now pursue at Austin Community College.
          </p>
        </div>
      </section>
    </div>
  );
}
// Load policies section
function loadPolicies() {
  const html = `
    <section id="policies" class="py-20 px-4 lg:px-8 bg-white">
      <div class="container mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h2 class="text-[#2B2B2B]">Academic Policies</h2>
        </div>
        <p class="text-lg text-[#2B2B2B]/70 mb-12 max-w-3xl">
          Understanding our academic policies ensures you stay on track and maintain good academic standing 
          throughout your time at CITEC.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white rounded-xl p-6" style="border: 2px solid #E0E0E0;">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-[#2B2B2B] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h4 class="text-[#2B2B2B]">Minimum Grade for Continuation</h4>
            </div>
            <p class="text-[#2B2B2B]/80">Students must maintain a cumulative GPA of 2.0 or higher to remain in good academic standing. Individual courses require a minimum grade of 1.0 (passing) to earn credit.</p>
          </div>

          <div class="bg-white rounded-xl p-6" style="border: 2px solid #E0E0E0;">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-[#2B2B2B] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h4 class="text-[#2B2B2B]">Retake Policy</h4>
            </div>
            <p class="text-[#2B2B2B]/80">Students may retake a course up to two times if they receive a failing grade. The highest grade earned will be counted toward the GPA, but all attempts remain on the transcript.</p>
          </div>

          <div class="bg-white rounded-xl p-6" style="border: 2px solid #E0E0E0;">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-[#2B2B2B] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h4 class="text-[#2B2B2B]">Probation Rules</h4>
            </div>
            <p class="text-[#2B2B2B]/80">Students with a GPA below 2.0 will be placed on academic probation and must meet with their advisor. Continued low performance may result in academic dismissal.</p>
          </div>

          <div class="bg-[#FFD400]/5 rounded-xl p-6" style="border: 4px solid #FFD400;">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h4 class="text-[#2B2B2B]">Capstone Eligibility</h4>
            </div>
            <p class="text-[#2B2B2B]/80">To enroll in the Capstone Project, students must have completed all prerequisite courses with grades of 2.5 or higher and maintain good academic standing.</p>
          </div>
        </div>

        <div class="bg-[#2B2B2B] text-white rounded-xl p-8">
          <h4 class="mb-4">Additional Important Policies</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h5 class="text-[#FFD400] mb-2">Attendance Requirements</h5>
              <p class="text-white/80">Students must attend at least 80% of all scheduled classes to receive credit for a course.</p>
            </div>
            <div>
              <h5 class="text-[#FFD400] mb-2">Academic Integrity</h5>
              <p class="text-white/80">All work must be original. Plagiarism and cheating will result in disciplinary action.</p>
            </div>
            <div>
              <h5 class="text-[#FFD400] mb-2">Deadline Policy</h5>
              <p class="text-white/80">Late submissions may be accepted with prior approval and may incur grade penalties.</p>
            </div>
            <div>
              <h5 class="text-[#FFD400] mb-2">Grade Appeals</h5>
              <p class="text-white/80">Students may appeal grades within two weeks of receiving their final grade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  
  document.getElementById('policies-section').innerHTML = html;
}

// Load contact section
function loadContact() {
  const html = `
    <section id="contact" class="py-20 px-4 lg:px-8 bg-[#2B2B2B] text-white">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 class="text-white mb-6">Get in Touch</h2>
            <p class="text-white/80 mb-8">
              Have questions about the curriculum or admissions? Our team is here to help you navigate your 
              academic journey.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h5 class="text-[#FFD400] mb-1">Email</h5>
                  <p class="text-white/80">info@citec.edu</p>
                  <p class="text-white/80">admissions@citec.edu</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h5 class="text-[#FFD400] mb-1">Phone</h5>
                  <p class="text-white/80">+1 (555) 123-4567</p>
                  <p class="text-white/80">+1 (555) 123-4568</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h5 class="text-[#FFD400] mb-1">Address</h5>
                  <p class="text-white/80">
                    College of Information Technology<br>
                    and Engineering Curriculum<br>
                    123 University Avenue<br>
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-white mb-6">Download Resources</h3>
            <p class="text-white/80 mb-6">
              Access the complete curriculum guide, course catalog, and academic calendar.
            </p>
            
            <button class="bg-[#FFD400] text-[#2B2B2B] hover:bg-[#FFD400]/90 px-6 py-3 rounded-lg font-medium transition-colors mb-8 w-full md:w-auto inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Full Curriculum (PDF)
            </button>

            <div class="mt-12">
              <h5 class="text-[#FFD400] mb-4">Connect With Us</h5>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-[#FFD400] hover:bg-white rounded-lg flex items-center justify-center transition-colors group">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-[#FFD400] hover:bg-white rounded-lg flex items-center justify-center transition-colors group">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a href="#" class="w-12 h-12 bg-[#FFD400] hover:bg-white rounded-lg flex items-center justify-center transition-colors group">
                  <svg class="w-6 h-6 text-[#2B2B2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-8" style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-[#FFD400] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <span class="text-white">CITEC Department</span>
            </div>
            <p class="text-white/60 text-sm">© 2025 CITEC Department. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>`;
  
  document.getElementById('contact-section').innerHTML = html;
}
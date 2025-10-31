// Global state
let currentProgram = 'MMA';

// Icon mapping for course categories
const iconMap = {
  programming: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
  database: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`,
  systems: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>`,
  web: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  security: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
  theory: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initModal();
  loadCourses(currentProgram);
  loadPrerequisites();
  loadPolicies();
  loadContact();
});

// Navigation functionality
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Active section highlighting
  window.addEventListener('scroll', () => {
    const sections = ['hero', 'capstone', 'courses', 'prerequisites', 'policies', 'contact'];
    let current = '';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = sectionId;
        }
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('bg-[#FFD400]', 'text-[#2B2B2B]');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('bg-[#FFD400]', 'text-[#2B2B2B]');
      }
    });
  });
}

// Modal functionality
function initModal() {
  const modal = document.getElementById('program-modal');
  const programSelectBtn = document.getElementById('program-select-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const programOptions = document.querySelectorAll('.program-option');

  programSelectBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  programOptions.forEach(option => {
    option.addEventListener('click', function() {
      const program = this.getAttribute('data-program');
      switchProgram(program);
      modal.classList.remove('active');
    });
  });
}

// Switch between programs
function switchProgram(program) {
  currentProgram = program;
  const programData = courseData[program];
  
  document.getElementById('current-program').textContent = programData.name;
  document.getElementById('program-description').textContent = programData.description;
  
  loadCourses(program);
}

// Load courses for selected program
function loadCourses(program) {
  const container = document.getElementById('courses-container');
  const programCourses = courseData[program].courses;
  
  let html = '';
  
  Object.entries(programCourses).forEach(([year, semesters], yearIndex) => {
    const semesterEntries = Object.entries(semesters);
    const totalCourses = semesterEntries.reduce((acc, [_, courses]) => acc + courses.length, 0);
    const totalUnits = semesterEntries.reduce((acc, [_, courses]) => 
      acc + courses.reduce((sum, course) => sum + course.units, 0), 0);
    
    const bgColor = yearIndex % 2 === 0 ? '#FFFFFF' : '#F5F5F5';
    const iconBg = yearIndex % 2 === 0 ? '#2B2B2B' : '#FFD400';
    const iconColor = yearIndex % 2 === 0 ? '#FFD400' : '#2B2B2B';
    
    html += `
      <div class="mb-6 last:mb-0">
        <div class="rounded-xl overflow-hidden hover:border-[#FFD400] transition-all" style="border: 2px solid #E0E0E0; background: ${bgColor};">
          <div class="accordion-trigger px-6 py-4 cursor-pointer" data-year="${year}">
            <div class="flex items-center justify-between w-full pr-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style="background: ${iconBg}; color: ${iconColor};">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="text-[#2B2B2B]">${year}</h3>
                  <p class="text-sm text-[#2B2B2B]/60 mt-1">
                    ${totalCourses} ${totalCourses === 1 ? 'Course' : 'Courses'} • ${totalUnits} Units
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-sm text-[#2B2B2B]/70 hidden sm:block">Click to view courses</span>
                <svg class="w-6 h-6 chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="accordion-content px-6 pb-6">
            <div class="space-y-6 mt-2">`;
    
    semesterEntries.forEach(([semester, courses]) => {
      html += `
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-px flex-1 bg-[#FFD400]"></div>
                  <h4 class="text-[#2B2B2B] px-3 py-1 bg-[#FFD400] rounded-full">
                    ${semester}
                  </h4>
                  <div class="h-px flex-1 bg-[#FFD400]"></div>
                </div>
                <div class="grid md:grid-cols-2 gap-4">`;
      
      courses.forEach(course => {
        const icon = iconMap[course.category] || iconMap.theory;
        html += `
                  <div class="course-card bg-white rounded-xl p-4">
                    <div class="flex items-start justify-between gap-4 mb-3">
                      <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                          <div class="w-10 h-10 rounded-lg bg-[#FFD400] flex items-center justify-center flex-shrink-0 text-[#2B2B2B]">
                            ${icon}
                          </div>
                          <div class="font-semibold text-[#2B2B2B]">${course.code}</div>
                        </div>
                        <p class="text-[#2B2B2B] font-medium">${course.title}</p>
                      </div>
                      <div class="px-3 py-1 bg-[#2B2B2B] text-white rounded-full text-sm flex-shrink-0">
                        ${course.units} ${course.units === 1 ? 'Unit' : 'Units'}
                      </div>
                    </div>
                    <p class="text-sm text-[#2B2B2B]/70">${course.description}</p>
                  </div>`;
      });
      
      html += `
                </div>
              </div>`;
    });
    
    html += `
            </div>
          </div>
        </div>
      </div>`;
  });
  
  container.innerHTML = html;
  initAccordions();
}

// Initialize accordion functionality
function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const chevron = this.querySelector('.chevron');
      
      content.classList.toggle('active');
      chevron.classList.toggle('rotate');
    });
  });
}

// Load prerequisites section
function loadPrerequisites() {
  const html = `
    <section id="prerequisites" class="py-20 px-4 lg:px-8" style="background: linear-gradient(180deg, #E0E0E0 0%, #F5F5F5 100%);">
      <div class="container mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-[#FFD400] rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </div>
          <h2 class="text-[#2B2B2B]">Prerequisites & Course Flow</h2>
        </div>
        <p class="text-lg text-[#2B2B2B]/70 mb-12 max-w-3xl">
          Understanding the prerequisite relationships helps you plan your academic journey and ensures you're 
          properly prepared for advanced coursework.
        </p>

        <div class="bg-white rounded-xl p-8 mb-8" style="border: 2px solid #E0E0E0;">
          <h4 class="text-[#2B2B2B] mb-8">Core Programming Track</h4>
          <div class="space-y-8">
            <div class="flex items-center gap-4 flex-wrap">
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #E0E0E0;">
                <span class="text-[#2B2B2B]">CS101: Intro to Programming</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-0.5 w-12 bg-[#FFD400]"></div>
                <div style="width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 12px solid #FFD400;"></div>
              </div>
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #FFD400;">
                <span class="text-[#2B2B2B]">CS201: Data Structures</span>
              </div>
            </div>

            <div class="flex items-center gap-4 flex-wrap">
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #E0E0E0;">
                <span class="text-[#2B2B2B]">CS201: Data Structures</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-0.5 w-12 bg-[#FFD400]"></div>
                <div style="width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 12px solid #FFD400;"></div>
              </div>
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #FFD400;">
                <span class="text-[#2B2B2B]">CS301: Algorithms</span>
              </div>
            </div>

            <div class="flex items-center gap-4 flex-wrap">
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #E0E0E0;">
                <span class="text-[#2B2B2B]">CS202: OOP</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-0.5 w-12 bg-[#FFD400]"></div>
                <div style="width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 12px solid #FFD400;"></div>
              </div>
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #FFD400;">
                <span class="text-[#2B2B2B]">CS303: Software Engineering</span>
              </div>
            </div>

            <div class="flex items-center gap-4 flex-wrap">
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #E0E0E0;">
                <span class="text-[#2B2B2B]">CS301: Algorithms</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-0.5 w-12 bg-[#FFD400]"></div>
                <div style="width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 12px solid #FFD400;"></div>
              </div>
              <div class="bg-[#F5F5F5] rounded-lg px-6 py-4 flex-1 min-w-[200px]" style="border: 2px solid #FFD400;">
                <span class="text-[#2B2B2B]">CS401: Machine Learning</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#FFD400]/10 rounded-xl p-6" style="border: 2px solid #FFD400;">
          <h5 class="text-[#2B2B2B] mb-3">Important Notes</h5>
          <ul class="space-y-2 text-[#2B2B2B]/80">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-[#2B2B2B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Prerequisites must be completed with a passing grade before enrolling in advanced courses</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-[#2B2B2B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Some courses may have co-requisites that must be taken simultaneously</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-[#2B2B2B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Consult your academic advisor for personalized course planning</span>
            </li>
          </ul>
        </div>
      </div>
    </section>`;
  
  document.getElementById('prerequisites-section').innerHTML = html;
}

// Continue in next part...
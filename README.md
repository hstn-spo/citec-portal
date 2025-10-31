# CITEC Curriculum Website - Multi-File Version

This is a complete, ready-to-use curriculum website for the College of Information Technology & Engineering (CITEC). The site displays course information for both Multi-Media Arts (MMA) and Information Technology (IT) programs.

## Files Included

1. **index.html** - Main HTML file with the page structure
2. **styles.css** - All styling and animations
3. **courseData.js** - Complete course data for MMA and IT programs
4. **script.js** - Main JavaScript functionality for navigation and courses
5. **sections.js** - Policies and contact section loaders
6. **README.md** - This file with setup instructions

## File Structure

```
citec-website/
├── index.html
├── styles.css
├── courseData.js
├── script.js
├── sections.js
└── README.md
```

## Setup Instructions

### Option 1: Local Setup (Recommended)

1. **Create a new folder** for your project (e.g., `citec-website`)

2. **Copy all files** into this folder:
   - index.html
   - styles.css
   - courseData.js
   - script.js
   - sections.js

3. **Open index.html** in your web browser by:
   - Double-clicking the file, OR
   - Right-click → Open with → Your preferred browser

That's it! The website should load and work perfectly.

### Option 2: Web Server Setup

If you want to run it on a web server:

1. Place all files in your web server's public directory (e.g., `public_html`, `www`, or `htdocs`)

2. Access the site through your web server URL (e.g., `http://localhost/citec-website/`)

## Features

### ✅ Included Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Two Program Tracks** - Multi-Media Arts (MMA) and Information Technology (IT)
- **Interactive Navigation** - Smooth scrolling and active section highlighting
- **Course Accordions** - Expandable/collapsible year-by-year course listings
- **Program Switcher** - Easy toggle between MMA and IT curricula
- **Modal Dialog** - Clean program selection interface
- **Complete Course Data** - All 4 years of courses for both programs
- **Prerequisites Section** - Visual course flow diagrams
- **Policies Section** - Academic policies and requirements
- **Contact Section** - Contact information and social media links
- **Capstone Information** - Detailed capstone project requirements

### 🎨 Design Highlights

- **Color Scheme**: 
  - Primary Yellow: #FFD400
  - Dark Gray: #2B2B2B
  - Light Gray: #F5F5F5
  - Medium Gray: #E0E0E0

- **Typography**: Inter font family (loaded from Google Fonts CDN)

- **Animations**: Smooth transitions, accordion animations, modal slide-ins

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-yellow: #FFD400;  /* Change this for primary color */
  --dark-gray: #2B2B2B;       /* Change this for dark accents */
  --light-gray: #F5F5F5;      /* Change this for light backgrounds */
  --medium-gray: #E0E0E0;     /* Change this for borders */
}
```

### Adding/Editing Course Data

Edit `courseData.js` to modify courses:

```javascript
const courseData = {
  MMA: {
    courses: {
      "1st Year": {
        "First Semester": [
          { 
            code: "NEW101", 
            title: "New Course Title", 
            units: 3, 
            description: "Course description here", 
            category: "programming" 
          },
          // Add more courses...
        ]
      }
    }
  }
};
```

**Available Categories**:
- `programming` - Shows code icon
- `database` - Shows database icon
- `systems` - Shows CPU/system icon
- `web` - Shows globe icon
- `security` - Shows shield icon
- `theory` - Shows book icon

### Updating Contact Information

Edit the `loadContact()` function in `sections.js` to update:
- Email addresses
- Phone numbers
- Physical address
- Social media links

### Modifying Sections

Each section is modular and can be edited:
- **Hero Section** - In `index.html`
- **Capstone Section** - In `index.html`
- **Courses Section** - Generated dynamically by `script.js`
- **Prerequisites Section** - In `loadPrerequisites()` function in `script.js`
- **Policies Section** - In `loadPolicies()` function in `sections.js`
- **Contact Section** - In `loadContact()` function in `sections.js`

## Browser Compatibility

✅ Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Dependencies

- **Tailwind CSS** - Loaded from CDN (no installation needed)
- **Google Fonts** - Inter font family loaded from CDN
- **No build process required** - Pure HTML, CSS, and JavaScript

## File Sizes

- index.html: ~15 KB
- styles.css: ~3 KB
- courseData.js: ~12 KB
- script.js: ~8 KB
- sections.js: ~6 KB
- **Total**: ~44 KB (very lightweight!)

## Troubleshooting

### Courses not showing up?
- Make sure `courseData.js` is loaded before `script.js` in `index.html`
- Check browser console for any errors (F12 → Console tab)

### Styles not working?
- Verify Tailwind CSS CDN link is working
- Check that `styles.css` path is correct in `index.html`

### Accordion not expanding?
- Make sure `script.js` is loaded properly
- Check that JavaScript is enabled in your browser

### Modal not opening?
- Verify all JavaScript files are loading in the correct order
- Check browser console for errors

## Performance Tips

1. **For production**, consider:
   - Minifying CSS and JavaScript files
   - Self-hosting Tailwind CSS instead of using CDN
   - Optimizing images (if you add any)

2. **Loading speed** is already optimized:
   - Minimal external dependencies
   - Small file sizes
   - Efficient JavaScript

## Future Enhancements

Possible additions you could make:
- Search functionality for courses
- Filter courses by category
- Print-friendly version
- PDF generation for curriculum
- Student testimonials section
- Faculty information
- Admission requirements section
- Scholarship information

## Support

For questions or issues:
1. Check this README first
2. Review the code comments in each file
3. Test in a different browser
4. Check browser console for errors

## License

This template is free to use and modify for educational purposes.

---

**Created for CITEC Department - College of Information Technology & Engineering**

*Last Updated: 2025*
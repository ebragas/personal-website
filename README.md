# Eric Bragas - Personal Portfolio Website

## Overview
This is a personal portfolio website showcasing my professional work, skills, and contact information. The site is built with modern HTML, CSS, and JavaScript, and is deployed using GitHub Pages.

## Features
- Responsive, modern design
- Smooth scrolling navigation
- Project showcase
- Contact form
- Animated sections
- Skills categorization

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- GitHub Actions for deployment

## Local Development
1. Clone the repository
   ```bash
   git clone https://github.com/ebragas/personal-website.git
   cd personal-website
   ```

2. Start a local server
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   # OR using Node.js
   npx http-server
   ```

3. Open `http://localhost:8000` in your browser

## Deployment
This website is automatically deployed to GitHub Pages using GitHub Actions.

### Initial Setup
1. Create a new repository on GitHub
   - Go to https://github.com/new
   - Name the repository (e.g., `personal-website`)
   - Make it public
   - Don't initialize with any files

2. Push your code to GitHub
   ```bash
   git remote add origin https://github.com/ebragas/personal-website.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

### Continuous Deployment
- The site automatically deploys when changes are pushed to the `main` branch
- Deployment status can be viewed in the "Actions" tab of your repository
- Once deployed, the site will be available at `https://ebragas.github.io/personal-website`

### Making Changes
1. Make your changes locally
2. Test them using the local development server
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. GitHub Actions will automatically deploy the updates

## Contact
Eric Bragas
Email: ericbragas412@gmail.com
LinkedIn: https://www.linkedin.com/in/ericbragas93/
GitHub: https://github.com/ebragas
Twitter: https://x.com/ericbragas

## Projects
- The Microdose Journal (www.themicrodosejournal.com)
- Sonder Burning Man Camp (www.wearesonder.org)

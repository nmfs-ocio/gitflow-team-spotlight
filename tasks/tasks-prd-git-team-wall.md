## Relevant Files

- `index.html` - The main layout file containing the Tailwind CDN, mascot placeholder, and container for profile cards.
- `data.js` - Contains the array of team profile objects with sample templates.
- `app.js` - Logic to iterate over `data.js` and inject the cards into `index.html`.
- `README.md` - Documentation featuring the task checklist, Git step-by-step guide, and troubleshooting section.
- `assets/osprey-placeholder.png` - Placeholder image for the team mascot.
- `assets/avatar-placeholder.png` - Placeholder image for team member avatars.

### Notes
- This is a vanilla HTML/JS project. No build commands or test runners are required. Testing is done by simply opening `index.html` in a web browser.

## Tasks

- [x] 1.0 Set up Project Structure and Assets
  - [x] 1.1 Initialize the project directory structure (e.g., create `assets/` folder).
  - [x] 1.2 Add the `assets/osprey-placeholder.png` file.
  - [x] 1.3 Add the `assets/avatar-placeholder.png` file.
- [x] 2.0 Create the UI Layout and HTML Skeleton
  - [x] 2.1 Create `index.html` and include the Tailwind CSS CDN.
  - [x] 2.2 Build the header section with the Mascot placeholder and project title (using Burnt Orange and Teal accents).
  - [x] 2.3 Create the main grid container for the profile cards (`div#team-grid`).
  - [x] 2.4 Build a static HTML template for a single profile card to verify design, then remove it for JS injection.
- [x] 3.0 Implement JavaScript Data Rendering
  - [x] 3.1 Create `data.js` and define the array with 1-2 pre-filled sample templates matching the PRD.
  - [x] 3.2 Create `app.js` and link it (along with `data.js`) to `index.html`.
  - [x] 3.3 Write logic in `app.js` to iterate over the `data` array and dynamically inject the cards into `div#team-grid`.
- [ ] 4.0 Draft the README Documentation
  - [ ] 4.1 Create `README.md` and add the Project Title & Overview.
  - [ ] 4.2 Add the Markdown Checklist for team members.
  - [ ] 4.3 Add the exact step-by-step Git instructions (Assign, Clone, Branch, Edit, Commit, Push, PR).
  - [ ] 4.4 Add the Troubleshooting section (e.g., resolving merge conflicts).

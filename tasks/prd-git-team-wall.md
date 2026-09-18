# Product Requirements Document: Git Team Wall

## Introduction/Overview
This project is a hands-on exercise designed to teach staff the basics of Git. By participating, team members will learn standard version control workflows by adding their own profile card to a "Team Wall" website. The project uses purely vanilla HTML, CSS (via Tailwind CDN), and JavaScript, ensuring participants can focus entirely on Git mechanics rather than tooling setup.

## Goals
- Provide a practical, risk-free environment for staff to learn and practice Git.
- Produce a functional, attractive visual directory of the team.
- Teach core Git concepts: cloning, branching, committing, pushing, and pull requests.

## User Stories
- As a team member, I want to follow clear, step-by-step instructions so I can successfully add my profile and learn Git without feeling overwhelmed.
- As a team lead, I want the codebase to be simple (no build tools) so team members aren't blocked by local environment setup issues.

## Functional Requirements
1. **Technology Stack:** The project must use vanilla HTML5, CSS (via Tailwind CDN), and JavaScript. No build steps are allowed.
2. **UI & Layout:** The interface must be a modern, maritime-inspired glassmorphism UI with dark mode support.
3. **Branding & Colors:** 
   - Primary: NOAA Dark Blue (`#003087`)
   - Secondary: Process Light Blue (`#0085CA`)
   - Accent/Alert: Osprey Amber (`#FF9F1C`)
   - Backgrounds/Text: Slate 900 (`#0F172A`) for light mode, `#0B1220` and `#F1F5F9` for dark mode.
4. **Typography:** `Lato` for body text and `Plus Jakarta Sans` for headings.
5. **Mascot Logo:** The header/top of the page must use the `assets/logo.png` image.
5. **Profile Cards:** Each card must display:
   - Avatar Image Placeholder
   - Name
   - Role
   - Bio
   - Favorite Tech
   - GitHub Username
6. **Data Structure:** A `data.js` file must hold an array of profile objects. It must include 1-2 pre-filled sample templates that users can easily copy and modify.
7. **Rendering:** JavaScript must dynamically read from `data.js` and render the profile cards into the HTML grid.
8. **README - Overview:** The `README.md` must contain a brief welcome explaining the project's educational purpose.
9. **README - Checklist:** A Markdown checklist (e.g., `- [ ] Teammate Name`) must be included for users to mark themselves off during their PR.
10. **README - Happy Path Instructions:** Must contain exact step-by-step terminal commands for:
    - Assigning/claiming their GitHub Issue.
    - Cloning the repository.
    - Creating and switching to a feature branch.
    - Making edits (`data.js` and `README.md`).
    - Staging and committing changes.
    - Pushing the branch.
    - Opening a Pull Request.
11. **README - Troubleshooting:** Must include a section for common Git issues (e.g., how to resolve a merge conflict in `README.md`).

## Non-Goals (Out of Scope)
- Any build tools, bundlers, or package managers (Node.js, npm, Webpack, etc.).
- UI interactivity (like search or filtering). The grid is strictly static.
- Backend databases or API integrations.

## Design Considerations
- **Theme:** Full Dark Mode and Light Mode support.
- **Glassmorphism:** Use custom CSS tiers (`.glass-panel`, `.glass-panel-float`, `.glass-panel-alert`) to create translucent, maritime-inspired cards.
- **Animations:** Implement custom keyframes (e.g., `animate-moving-bg`, `animate-aurora`, `animate-float`) to add polish and simulate nautical elements.
- **Icons:** Use `lucide` via CDN for standard iconography.

## Success Metrics
- Team members successfully open Pull Requests containing their profile data.
- Reduction in beginner Git questions for future development projects.

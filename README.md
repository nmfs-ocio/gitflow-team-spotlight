<div align="center">
  <img src="assets/logo.png" alt="Osprey Logo" width="150" />
  <h1>App Delivery Team Wall</h1>
</div>

Welcome to the **Add Delivery Team Wall**! This project is a hands-on exercise designed to teach you the basics of Git and GitHub collaboration. By participating, you will learn standard version control workflows by adding your own profile card to this "Team Wall" website.

The project is built using purely vanilla HTML, CSS (Tailwind via CDN), and JavaScript, ensuring we can focus entirely on Git mechanics rather than build tools.

---

## 🎯 Task Checklist

When you open your Pull Request (PR), please check off your name below so we can track who has completed the exercise:

- [ ] Joshua
- [ ] Britany
- [ ] Erika
- [ ] Scott
- [ ] Mukta

---

## 🚀 Step-by-Step Instructions

Follow these instructions exactly to add your profile to the wall!

### 1. Assign Yourself
Go to the Issues tab in this repository and assign yourself to the designated "Add Team Profile" issue (or create one and assign it to yourself if instructed by the team lead).

### 2. Clone the Repository
Open your terminal and clone the repository to your local machine:
```bash
git clone <REPOSITORY_URL>
cd gitflow-team-spotlight
```

### 3. Create a Feature Branch
Always create a new branch for your work. Never work directly on `main`!
```bash
git checkout -b feature/your-name-card
```

### 4. Add Your Profile Data
Open the project in your code editor.
1. Open `data.js`.
2. Copy one of the existing profile objects (e.g., Jane Doe's).
3. Paste it at the end of the array (don't forget the comma after the previous object!).
4. Update the values (`name`, `role`, `bio`, `favoriteTech`, `github`) with your own information.
5. Save the file.
6. Open `index.html` in your web browser to verify your card appears correctly.

### 5. Mark the Checklist
Open `README.md` (this file). Find your name in the **Task Checklist** above, and change the `[ ]` to `[x]`. Save the file.

### 6. Stage and Commit Your Changes
Stage both `data.js` and `README.md`:
```bash
git add data.js README.md
```
Commit your changes with a descriptive message:
```bash
git commit -m "feat: add profile card for Your Name"
```

### 7. Push Your Feature Branch
Push your branch to the remote repository on GitHub:
```bash
git push -u origin feature/your-name-card
```

### 8. Open a Pull Request & Assign a Reviewer
1. Go to the repository on GitHub.
2. You should see a prompt to "Compare & pull request" for your recently pushed branch. Click it.
3. Ensure the base branch is `main`.
4. Add a brief description.
5. On the right sidebar, click **Reviewers** and select one of your teammates.
6. Click **Assignees** and assign the PR to that same teammate. This ensures everyone gets a turn practicing code review!
7. Click **Create Pull Request**.

### 9. Review and Merge (Take your turn!)
When a teammate assigns a PR to you:
1. Go to the Pull Requests tab and open the PR assigned to you.
2. Review their code in the "Files changed" tab.
3. If it looks good, click **Review changes** and select **Approve**.
4. Finally, click the green **Merge pull request** button to merge their profile into the `main` branch!

### 🌟 Stretch Goal: Customize Your Avatar
Want to make your card truly yours? Add a real picture instead of the placeholder!
1. Copy a square image of yourself (e.g., `your-name.jpg`) into the project's `assets/` folder.
2. In `data.js`, update the `avatar` path for your profile from `"assets/avatar-placeholder.png"` to `"assets/your-name.jpg"`.
3. Make sure to stage your new image file before you commit: 
   ```bash
   git add assets/your-name.jpg
   ```

---

## 🛠️ Troubleshooting

### "I forgot to pull the latest changes before branching!"
If someone merged a PR while you were working, you might be out of date. To fix this:
```bash
git checkout main
git pull origin main
git checkout feature/your-name-card
git merge main
```

### Resolving Merge Conflicts
If multiple people edit the `README.md` checklist at the same time, you may encounter a merge conflict when pulling or merging. 
1. Open the conflicted file (e.g., `README.md`).
2. Look for the conflict markers `<<<<<<< HEAD`, `=======`, and `>>>>>>>`.
3. Manually edit the file to keep both your checked box and your teammates' checked boxes.
4. Delete the conflict markers.
5. Save, then run:
```bash
git add README.md
git commit -m "chore: resolve merge conflict in README"
```

### "My card isn't showing up in the browser!"
1. Check the console (Right Click -> Inspect -> Console).
2. Look for syntax errors in `data.js` (often a missing comma between objects, or unclosed quotation marks).

---
*Happy coding, and welcome to the team!*
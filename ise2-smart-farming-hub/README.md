# Smart Farming Learning Hub

> ISE–2 Practical | DevOps and Kubernetes | Website Development, Git/GitHub Version Control and DevOps Tool Integration

## 1. Project Introduction

Smart Farming Learning Hub is a beginner-friendly educational website that introduces basic crop-care practices. Visitors can read general watering, sunlight, and soil tips; search crop cards; view crop-specific learning tips; and estimate plant count for a growing area.

## 2. Objective

- Build a responsive website using HTML, CSS, and JavaScript.
- Track project changes with Git and publish the repository on GitHub.
- Use Jenkins to retrieve the repository and check that required website files exist.
- Record evidence of the website, commit history, GitHub repository, and Jenkins results.

## 3. Technology Stack

- HTML5: page structure and content
- CSS3: responsive layout, colours, cards, and light/dark theme styling
- JavaScript: crop search, care-tip interaction, theme toggle, and plant-count estimate
- Git: local version control and commit history
- GitHub: remote repository hosting
- Jenkins: simple continuous-integration pipeline

## 4. How to Run the Website

1. Download or clone this repository to your computer.
2. Open the project folder in Visual Studio Code or File Explorer.
3. Double-click `index.html` to open it in a browser, or use the VS Code Live Server extension if available.
4. Try the theme button, crop search, crop care-tip buttons, and seed-space calculator.

No backend server or API key is required for the website.

## 5. Changes Made and Commit Details

The following five meaningful website changes were committed separately using Git and pushed to GitHub.

| No. | Commit Hash | Commit Message | Description |
|---:|---|---|---|
| 1 | `4d2852b` | Add potato crop information | Added a Potato crop card with crop-care information and a care-tip button. |
| 2 | `f4df3f3` | Improve button hover effects | Added hover animations and visual feedback for buttons. |
| 3 | `7bcec59` | Improve crop search functionality | Improved search to filter crops by name, category, and description. |
| 4 | `70d7718` | Improve seed calculator input validation | Added validation for empty, invalid, non-finite, zero, and negative inputs. |
| 5 | `ca26aa5` | Improve keyboard accessibility | Added visible keyboard-focus indicators for buttons, links, and input fields. |

The initial project commit is `446447e` (`Initial website project`). The commit hashes above are short hashes from this project's Git history.

## 6. Git and GitHub Workflow

Commands used during the workflow (run in the project directory):

```bash
git init
git add .
git commit -m "Initial website structure"
git branch -M main
git remote add origin https://github.com/2905SP/smart-farming-learning-hub.git
git push -u origin main
```

For each later change, save your files and run:

```bash
git status
git add .
git commit -m "Describe the actual change"
git push
```

Replace the sample remote URL with your own GitHub repository URL. Never put passwords, personal access tokens, or other secrets in the repository or README.

## 7. Jenkins Integration

This repository includes a `Jenkinsfile` for a basic Jenkins Pipeline. It checks out the configured Git repository and verifies that the website files (`index.html`, `style.css`, and `script.js`) and project documentation (`README.md` and `Jenkinsfile`) exist in the `ise2-smart-farming-hub` folder. It is a basic file-validation CI job; it does not deploy the site to a public hosting service.

### Setup and execution

1. Install Git for Windows and a supported Java version. Current Jenkins releases require Java 21 or later; check the official Jenkins documentation before installation.
2. Install Jenkins using the official Windows installer. Open `http://localhost:8080` after the service starts and follow the unlock/setup wizard.
3. Install suggested plugins, including the Pipeline and Git-related plugins if they are not already installed.
4. Push this project to a GitHub repository that Jenkins can access.
5. In Jenkins, select **New Item**, enter a job name such as `smart-farming-hub-ci`, select **Pipeline**, and press **OK**.
6. In the job configuration, find **Pipeline**. Select **Pipeline script from SCM**.
7. Choose **Git** as SCM, enter your GitHub repository URL, and set the branch to `*/main` (adjust if your branch has a different name).
8. Set **Script Path** to `ise2-smart-farming-hub/Jenkinsfile`, save the job, and click **Build Now**.
9. Open the build number and then **Console Output**. Confirm that the file checks pass and the build finishes with `Finished: SUCCESS`.
10. If the repository is private, configure Jenkins credentials securely. Do not paste tokens into the repository or screenshots.

The pipeline uses Windows `bat` steps, so run it on a Windows Jenkins agent. If your Jenkins agent runs Linux, replace those checks with suitable shell commands.

Official guide: https://www.jenkins.io/doc/book/installing/windows/

## 8. Screenshots and Evidence

The following genuine screenshots document the working website, GitHub repository, Git commit history, the five website improvements, and Jenkins integration. Save these image files in the `screenshots` folder alongside this README.

| Screenshot file | Evidence shown |
|---|---|
| `screenshots/01-website-home.png` | Smart Farming Learning Hub homepage. |
| `screenshots/02-website-home-2.png` | Crop guide page with crop cards. |
| `screenshots/03-website-home-3.png` | Seed-space calculator with an example result. |
| `screenshots/04-github-repository.png` | GitHub repository page. |
| `screenshots/05-git-commits.png` | Terminal showing the Git commit history. |
| `screenshots/06-potato-crop.png` | Potato crop card added in the first improvement. |
| `screenshots/07-button-styling.png` | Website view for the button styling improvement. |
| `screenshots/08-crop-search.png` | Crop search filtering the crop cards. |
| `screenshots/09-calculator-validation.png` | Seed calculator input-validation evidence. |
| `screenshots/10-accessibility-update.png` | Website view associated with the keyboard-accessibility improvement. |
| `screenshots/11-jenkins-build.png` | Jenkins dashboard and build history. |
| `screenshots/12-jenkins-console.png` | Jenkins Console Output for the pipeline run. |

### 8.1 Website Homepage

![Smart Farming Learning Hub homepage](screenshots/01-website-home.png)

### 8.2 Crop Guide

![Crop guide page](screenshots/02-website-home-2.png)

### 8.3 Seed-Space Calculator

![Seed-space calculator](screenshots/03-website-home-3.png)

### 8.4 GitHub Repository

![GitHub repository](screenshots/04-github-repository.png)

### 8.5 Git Commit History

![Git commit history](screenshots/05-git-commits.png)

### 8.6 Website Improvements

![Potato crop information](screenshots/06-potato-crop.png)

![Website button styling improvement](screenshots/07-button-styling.png)

![Crop search](screenshots/08-crop-search.png)

![Seed calculator validation](screenshots/09-calculator-validation.png)

![Website view associated with the accessibility improvement](screenshots/10-accessibility-update.png)

### 8.7 Jenkins Integration

![Jenkins dashboard and build history](screenshots/11-jenkins-build.png)

![Jenkins Console Output](screenshots/12-jenkins-console.png)

## 9. Testing Checklist

- [ ] Homepage and navigation open correctly.
- [ ] Theme button switches between light and dark themes.
- [ ] Crop search filters the crop cards.
- [ ] Care-tip buttons update the message area.
- [ ] Calculator returns a reasonable estimate for valid positive inputs.
- [ ] Website layout works on a narrow/mobile browser window.
- [ ] At least five meaningful commits appear in `git log --oneline`.
- [ ] GitHub contains the latest code and `Jenkinsfile`.
- [ ] Jenkins pipeline finishes successfully and console output is saved.
- [ ] README contains the final repository URL and real screenshots.

## 10. Conclusion

This practical demonstrates a basic website development workflow, source-code version control using Git, repository hosting with GitHub, and continuous integration using Jenkins. The Jenkins pipeline performs basic checks to help identify missing project files before the work is reviewed.

## Repository Details

- Student name: Samruddhi Nandkishor Patil
- Class/Branch: AI and Machine Learning Engineering
- Subject: DevOps and Kubernetes
- GitHub repository: https://github.com/2905SP/smart-farming-learning-hub
- Git commit history: https://github.com/2905SP/smart-farming-learning-hub/commits/main/
- Jenkins job: `smart-farming-hub-ci`

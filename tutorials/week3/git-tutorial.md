# GIT Basics: Version Control for Developers

Why It Matters:

- Version control: track every change in code
- Collaboration: multiple developers, one repo
- Safety net: rollback to working states
- Foundation for GitHub / GitLab workflows

## 1. Git Setup

```bash
# Configure once per computer
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Start a new repo
git init
```

**Tip:** Always check your config with

```bash
git config --list
```

## 2. Core Workflow

1. **Working Directory** → edit files
2. **Staging Area** → `git add`
3. **Repository** → `git commit`

```bash
git add file.html
git commit -m "Add homepage"
```

## 3. Cloning & Remotes

```bash
# Clone an existing repo
git clone https://github.com/user/project.git

# Add a remote
git remote add origin https://github.com/user/project.git

# Push your work
git push origin main
```

## 4. Inspecting History

```bash
git status      # what changed?
git log         # commit history
git diff        # see actual changes
```

**Practice:** run these often to stay oriented.

## 5. Branching Basics

- **main**: stable branch
- **feature branches**: experiment without breaking main

```bash
git branch feature-nav
git checkout feature-nav
# or in one step
git checkout -b feature-nav
```

Merge later with:

```bash
git checkout main
git merge feature-nav
```

## 6. Common Collaboration Cycle

- `git pull` → get the latest main
- `git checkout -b feature-X`
- Work + `git add` + `git commit`
- `git push origin feature-X`
- Open Pull Request on GitHub

## 7. Quick Mental Model

- **Git = local version control**
- **GitHub = remote host + collaboration**
- Branches = parallel timelines
- Commits = save points

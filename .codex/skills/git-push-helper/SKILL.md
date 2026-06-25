---
name: git-push-helper
description: Use when the user wants Codex to commit and push this repo to GitHub, or wants a reliable push workflow for this repo. Commit only the intended files, attempt the push, and if network access is blocked or GitHub is unreachable, report the exact terminal command the user should run locally.
---

# Git Push Helper

Use this skill when the user asks Codex to push changes to GitHub or wants a repeatable push workflow.

## Workflow

1. Check `git status --short` and confirm which files are changed.
2. If changes are intentional and uncommitted, stage only the intended files and create a clean commit.
3. Try `git push origin main`.
4. If the push succeeds, report success and mention that GitHub Pages may take a moment to update.
5. If the push fails because the environment cannot reach GitHub, tell the user plainly and give this exact fallback:

```bash
cd /Users/federicoorozco/Documents/Codex/2026-06-10/can-we-update-this-app-with/repo
git push origin main
```

## Rules

- Never use destructive git commands.
- Do not stage unrelated files just to make the push easier.
- If there are multiple unrelated changes, prefer a focused commit.
- If the working tree is already clean, try the push directly.
- If the failure is a network or DNS issue, do not keep retrying; hand off to the user with the exact command.

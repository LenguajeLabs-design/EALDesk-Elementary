## EALDesk Elementary import notes

This folder is a cleaned and adapted project prepared for upload into a new GitHub repository named `LenguajeLabs-design/EALDesk-Elementary`.

### Project shape

- Root workspace uses `pnpm`
- Main frontend app: `artifacts/english-lab-planner`
- API server: `artifacts/api-server`
- Shared packages: `lib/*`
- Optional mockup playground: `artifacts/mockup-sandbox`

### Suggested next steps in GitHub

1. Create a new repository named `EALDesk-Elementary`.
2. Upload the contents of this folder into the repository root.
3. In GitHub Codespaces or your local machine, run `pnpm install`.
4. Start the frontend from `artifacts/english-lab-planner`.
5. Start the API server from `artifacts/api-server` if the app expects backend routes.

### Notes

- This version has been adapted for elementary Reader's Workshop and Writer's Workshop while keeping shared WIDA supports.
- This export originally included Replit cache and metadata files. Those were excluded from this cleaned folder.
- I was not able to run a full install or build from this session because network access for package installation and GitHub push was unavailable here.

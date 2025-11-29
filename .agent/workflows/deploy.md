---
description: Deploy changes to GitHub
---
// turbo-all
1. Add all changes to git
git add .

2. Commit changes with a generic message (or prompt user if needed, but for auto-deploy we use generic)
git commit -m "Deploying latest changes via /deploy"

3. Push to the repository
git push

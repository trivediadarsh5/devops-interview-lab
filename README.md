# ==========================
# Node.js
# ==========================
**/node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# ==========================
# Environment Variables
# ==========================
**/.env
**/.env.*
!.env.example

# ==========================
# Build Output
# ==========================
frontend/dist/
backend/dist/
coverage/

# ==========================
# Logs
# ==========================
logs/
*.log

# ==========================
# VS Code
# ==========================
.vscode/

# ==========================
# Operating System
# ==========================
.DS_Store
Thumbs.db

# ==========================
# Terraform
# ==========================
**/.terraform/
**/*.tfstate
**/*.tfstate.*
**/.terraform.lock.hcl
crash.log
crash.*.log
override.tf
override.tf.json
*_override.tf
*_override.tf.json

# ==========================
# PM2
# ==========================
.pm2/

# ==========================
# Misc
# ==========================
*.bak
*.tmp
*.swp
terraform/keys/id_rsa
terraform/keys/*.pem
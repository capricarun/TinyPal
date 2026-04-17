#!/bin/bash
set -e

PROJECT_DIR="/Users/Arun Kumar/Design/Claude/TinyPal"
cd "$PROJECT_DIR"

echo "🔧 Setting up git repository..."

# Clean up any broken git state
rm -rf .git

# Initialize fresh git repo with 'main' branch
git init -b main

# Set identity
git config user.email "rarun84in@gmail.com"
git config user.name "Arun Kumar"

# Stage all files
git add .

# Initial commit
git commit -m "Initial commit"

echo "✅ Git repository initialized!"

# Check if GitHub CLI is available
if command -v gh &> /dev/null; then
    echo "📤 Creating private GitHub repo and pushing..."
    gh repo create TinyPal --private --source=. --remote=origin --push
    echo ""
    echo "🎉 Done! TinyPal is now live on GitHub."
    gh repo view --web
else
    echo ""
    echo "⚠️  GitHub CLI (gh) not found."
    echo "To publish, either:"
    echo ""
    echo "  Option A – Install GitHub CLI:"
    echo "    brew install gh"
    echo "    gh auth login"
    echo "    gh repo create TinyPal --private --source=. --remote=origin --push"
    echo ""
    echo "  Option B – Create repo manually at https://github.com/new"
    echo "    Then run:"
    echo "    git remote add origin https://github.com/YOUR_USERNAME/TinyPal.git"
    echo "    git push -u origin main"
fi

#!/bin/bash

# Quick Save Command - Save current work state for easy restoration
echo "🔄 Quick Save: Checking current git status..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check git status
if git diff --quiet && git diff --staged --quiet && test -z "$(git ls-files --others --exclude-standard)"; then
    echo "ℹ️  No changes to commit"
    exit 0
fi

# Stage all changes (including untracked files)
echo "📦 Staging all changes..."
git add -A

# Get timestamp for commit message
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Create commit
echo "💾 Creating commit..."
if git commit -m "Quick save: $TIMESTAMP"; then
    echo "✅ Successfully saved current state"
    echo "📊 Summary:"
    git show --stat HEAD | tail -n +2
else
    echo "❌ Failed to create commit"
    exit 1
fi

echo "🎯 Quick save completed at $TIMESTAMP"

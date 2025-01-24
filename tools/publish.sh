# Check if Git working directory is clean
if [ -n "$(git status --porcelain)" ]; then
  echo -e "\033[33m⚠️  Git working directory is not clean. Staging and committing changes...\033[0m"
  # Stage all changes
  git add .
  # Commit changes
  git commit -m "chore: save changes before version bump"
fi

# Increment version (patch)
VERSION=$(npm version patch)

# Push changes to Git with tags
echo -e "\033[34m🔄 Pushing changes to Git...\033[0m"
git push --follow-tags
if [ $? -eq 0 ]; then
  echo -e "\033[32m✅ Git push successful! Proceeding with npm publish...\033[0m"
  
  # Run npm publish
  npm publish
  if [ $? -eq 0 ]; then
    echo -e "\033[32m✅ Publish successful! Version $VERSION has been published.\033[0m"
  else
    echo -e "\033[31m❌ Publish failed! Please check for issues.\033[0m"
  fi
else
  echo -e "\033[31m❌ Git push failed! Publish aborted.\033[0m"
fi
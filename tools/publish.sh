#!/bin/bash

# 1. 빌드 실행
echo -e "\033[34m🔄 Running build process...\033[0m"
npm run build
if [ $? -ne 0 ]; then
  echo -e "\033[31m❌ Build failed! Aborting...\033[0m"
  exit 1
fi
echo -e "\033[32m✅ Build successful!\033[0m"

# 2. 현재 버전과 새 버전을 비교하기 위해 package.json에서 현재 버전 가져오기
CURRENT_VERSION=$(node -p "require('./package.json').version")

# 3. 버전 업데이트 (patch) - Git 커밋과 태그는 자동 생성하지 않음
echo -e "\033[34m🔄 Updating version...\033[0m"
npm version patch --no-git-tag-version
if [ $? -ne 0 ]; then
  echo -e "\033[31m❌ Version update failed! Aborting...\033[0m"
  exit 1
fi

# 새 버전 가져오기
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "\033[32m✅ Version updated: $CURRENT_VERSION -> $NEW_VERSION.\033[0m"

# 4. 모든 변경 사항을 스테이징하고 한 번의 커밋 생성
echo -e "\033[34m🔄 Staging and committing changes...\033[0m"
git add .
git commit -m "chore: release version $CURRENT_VERSION -> $NEW_VERSION"

# 5. 변경 사항 및 태그를 Git에 푸시
echo -e "\033[34m🔄 Pushing changes to Git...\033[0m"
git tag "v$NEW_VERSION" # 태그를 수동으로 생성
git push --follow-tags
if [ $? -ne 0 ]; then
  echo -e "\033[31m❌ Git push failed! Aborting publish.\033[0m"
  exit 1
fi
echo -e "\033[32m✅ Git push successful!\033[0m"

# 6. npm publish 실행
echo -e "\033[34m🔄 Publishing to npm...\033[0m"
npm publish
if [ $? -eq 0 ]; then
  echo -e "\033[32m✅ Publish successful! Version $NEW_VERSION is now live.\033[0m"
else
  echo -e "\033[31m❌ Publish failed! Please check for issues.\033[0m"
  exit 1
fi
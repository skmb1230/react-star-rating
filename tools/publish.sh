#!/bin/bash

# 1. npm version patch 명령으로 패키지 버전을 자동 증가
# (patch 대신 minor 또는 major를 사용할 수도 있음)
npm version minor

npm publish

if [ $? -eq 0 ]; then
  git add .
  # 현재 package.json의 버전을 포함한 커밋 메시지를 작성
  git commit -m "chore: publish v$(node -p "require('./package.json').version")"
  git push
  echo -e "\033[32m✅ Publish successful! Changes have been committed and pushed to Git.\033[0m"
else
  echo -e "\033[31m❌ Publish failed! No changes were committed to Git.\033[0m"
fi
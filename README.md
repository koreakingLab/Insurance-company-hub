# insurance-company-hub
국내 보험회사 연락처 정보

## GitHub 자동 반영(Vercel)

웹에서 저장/삭제/초기화를 하면 Vercel API(`/api/sync-data`)가 `data.js`를 GitHub에 커밋합니다.

Vercel 환경변수:

- `GITHUB_TOKEN`: repo contents 쓰기 권한 토큰
- `GITHUB_REPO`: `owner/repo` 형식
- `GITHUB_BRANCH`: 반영 브랜치 (기본값 `main`)
- `GITHUB_DATA_PATH`: 반영 파일 경로 (기본값 `data.js`)
- `SYNC_WRITE_KEY`: (선택) API 보호용 키. 설정 시 첫 저장 때 키 입력 필요

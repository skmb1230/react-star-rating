import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"), // 라이브러리 진입점 파일
      name: "ReactStarRating", // UMD 모듈 이름
      fileName: (format) => `react-star-rating.${format}.js`, // 파일 이름
    },
    rollupOptions: {
      external: ["react", "react-dom"], // React와 ReactDOM을 외부 의존성으로 설정
      output: {
        dir: "dist", // 출력 디렉토리
        entryFileNames: "react-star-rating.[format].js", // 파일 이름 포맷
        formats: ["es", "cjs", "umd"], // ES Modules, CommonJS, UMD 포맷 지정
        globals: {
          react: "React", // React 의존성 전역 변수 설정
          "react-dom": "ReactDOM", // ReactDOM 의존성 전역 변수 설정
        },
      },
    },
  },
});

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // `types` 필드에 해당하는 타입 정의 파일 추가
      rollupTypes: true, // 타입 파일을 하나로 병합
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/StarRating.tsx"), // 라이브러리 진입점 파일
      name: "ReactStarRating", // UMD 모듈 이름
      fileName: (format) => `react-star-rating.${format}.js`, // 파일 이름
      formats: ["es", "cjs", "umd"], // ES Modules, CommonJS, UMD 포맷 생성
    },
    rollupOptions: {
      external: ["react", "react-dom"], // React와 ReactDOM은 외부 의존성으로 설정
      output: {
        globals: {
          react: "React", // React 의존성을 전역 변수로 설정
          "react-dom": "ReactDOM", // ReactDOM 의존성을 전역 변수로 설정
        },
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {enabled: true},
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/eslint",
    // 他のモジュール…
  ],
  image: {
    // ブラウザ対応に応じて左から優先配信（AVIF→WebP→元形式）
    format: ["avif", "webp"],
    quality: 70, // 画質（デフォ80）。サイズ優先なら 60〜70 が目安
    screens: {sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536}, // responsive用

    // リモート画像を使うなら許可ドメインを登録
    // domains: ['images.example.com'],

    // よく使う変換をプリセット化（任意）
    presets: {
      hero: {
        modifiers: {fit: "cover", quality: 65},
      },
      thumb: {
        modifiers: {width: 400, height: 250, fit: "cover", quality: 60},
      },
    },
  },
});

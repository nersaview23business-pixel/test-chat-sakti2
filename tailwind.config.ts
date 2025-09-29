import type { Config } from "tailwindcss";

const config: Config = {
  // Di v4.0, 'content' dideteksi otomatis, jadi kita gak perlu tulis
  theme: {
    extend: {
      fontFamily: {
        // Ini untuk font Mona Sans kita nanti
        sans: ["var(--font-mona-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
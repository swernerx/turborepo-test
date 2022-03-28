import { defineConfig } from "vite"
import reactPlugin from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin(), vanillaExtractPlugin()],
  server: {
    port: 4000
  }
})

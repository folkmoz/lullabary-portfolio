import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import preload from "vite-plugin-preload";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), ViteImageOptimizer(), preload()],
});

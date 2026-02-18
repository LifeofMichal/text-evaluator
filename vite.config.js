import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    // svgr options: https://react-svgr.com/docs/options/
    svgr({ svgrOptions: { icon: true } }),
  ],
});
//
//       // which allows you to import SVGs as React components
//       // import { ReactComponent as MyIcon } from './my-icon.svg';

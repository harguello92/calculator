import { UserConfig } from "vite";
import preact from "@preact/preset-vite";
import svgr from "vite-plugin-svgr";
// import ssr from "vite-plugin-ssr/plugin";

const config: UserConfig = {
  plugins: [preact(), svgr()],
};

export default config;

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  createFileWithContent,
  deleteFileIfExists,
} from "./deno-common/file.ts";

import { getFirstAvailablePort } from "./deno-common/net.ts";

const our_port = await getFirstAvailablePort(5000);

await deleteFileIfExists(".port");
await createFileWithContent(".port", our_port.toString());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: our_port, // Change this to your desired port
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { BACKEND_PORT_FILE } from "./backend/constants.ts";
import {
	createFileWithContent,
	deleteFileIfExists,
	readFileContents,
} from "./deno-common/file.ts";
import { getFirstAvailablePort } from "./deno-common/net.ts";
import { FRONTEND_PORT_FILE } from "./frontend/constants.ts";

const our_port = await getFirstAvailablePort(5000);

await deleteFileIfExists(FRONTEND_PORT_FILE);
await createFileWithContent(FRONTEND_PORT_FILE, our_port.toString());

const backendPortFile = await readFileContents(BACKEND_PORT_FILE);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: our_port, // Change this to your desired port
		proxy: {
			"/api": {
				target: `http://localhost:${backendPortFile}`,
				changeOrigin: true,
			},
		},
	},
});

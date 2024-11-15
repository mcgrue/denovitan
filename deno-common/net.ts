import { createServer } from "node:http";

/**
 * @param startPort the port to start checking from
 * @returns a promise that resolves to the first available port
 */
export const getFirstAvailablePort = async (
  startPort: number,
): Promise<number> => {
  const isPortAvailable = (port: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const server = createServer();
      server.once("error", () => {
        console.warn(`[${Deno.pid}] Port ${port} is not available`);
        resolve(false);
      });
      server.once("listening", () => {
        server.close(() => resolve(true));
      });
      server.listen(port);
    });
  };

  let port = startPort;
  while (!(await isPortAvailable(port))) {
    port++;
  }
  return port;
};

import { Application, Router } from "jsr:@oak/oak";
import { oakCors } from "jsr:@tajpouria/cors";
import data from "./data.json" with { type: "json" };
import routeStaticFilesFrom from "./util/routeStaticFilesFrom.ts";
import { getFirstAvailablePort } from "../deno-common/net.ts";
import {
  createFileWithContent,
  deleteFileIfExists,
} from "../deno-common/file.ts";
import { BACKEND_PORT_FILE } from "./constants.ts";

await deleteFileIfExists(BACKEND_PORT_FILE);

const startingBackendPort = 8000;

const port = await getFirstAvailablePort(startingBackendPort);
console.log(`[${Deno.pid}] found available backend port: ${port}`);

try {
  await createFileWithContent(BACKEND_PORT_FILE, port.toString());
  // deno-lint-ignore no-explicit-any
} catch (e: any) {
  console.error(`[${Deno.pid}] ${e.message}`);
  Deno.exit(1);
}

try {
  const router = new Router();

  // deno-lint-ignore no-explicit-any
  router.get("/api/dinosaurs", (context: any) => {
    context.response.body = data;
  });

  // deno-lint-ignore no-explicit-any
  router.get("/api/dinosaurs/:dinosaur", (context: any) => {
    if (!context?.params?.dinosaur) {
      context.response.body = "No dinosaur name provided.";
    }

    const dinosaur = data.find((item) =>
      item.name.toLowerCase() === context.params.dinosaur.toLowerCase()
    );

    context.response.body = dinosaur ? dinosaur : "No dinosaur found.";
  });

  const app = new Application();
  app.use(oakCors());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(routeStaticFilesFrom([
    `${Deno.cwd()}/dist`,
    `${Deno.cwd()}/public`,
  ]));

  console.log(
    `[${Deno.pid}] Starting Backend Server running on http://localhost:${port}`,
  );
  await app.listen({ port: port });

  // deno-lint-ignore no-explicit-any
} catch (e: any) {
  console.error(`[${Deno.pid}] ${e.message}`);
  Deno.exit(1);
}

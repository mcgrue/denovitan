import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import routeStaticFilesFrom from "./util/routeStaticFilesFrom.ts";

const port = 8000;
const router = new Router();

//No data -- for now.
router.get("/api/dredmor", () => {});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(routeStaticFilesFrom([
  `${Deno.cwd()}/dist`,
  `${Deno.cwd()}/public`,
]));

console.log(`starting Backend Server running on http://localhost:${port}`);
await app.listen({ port: port });

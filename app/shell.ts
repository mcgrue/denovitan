import { Webview } from "jsr:@webview/webview";

import { readFileContents } from "../deno-common/file.ts";

const showWebview = (url: string, windowTitle: string) => {
  const webview = new Webview();

  webview.navigate(url);

  webview.title = windowTitle;

  webview.run();
};

try {
  const content = await readFileContents(".port");
  console.log(`Port: ${content}`);

  showWebview(`http://localhost:${content}`, "Deno Webview");
} catch (e) {
  console.error(e);

  // get the full path to this source file's directory
  const __dirname = new URL(".", import.meta.url).pathname;
  const url = new URL("error.html", `file://${__dirname}`);

  showWebview(url.toString(), "Error");
}

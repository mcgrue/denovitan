import { Webview } from "jsr:@webview/webview";

const webview = new Webview();

webview.navigate(`http://localhost:5173`);

webview.title = "Deno Webview";

webview.run();

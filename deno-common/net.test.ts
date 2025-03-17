import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { getFirstAvailablePort } from "./net.ts";

describe("net utilities", () => {
  it("should find an available port starting from given port", async () => {
    const startPort = 3000;
    const port = await getFirstAvailablePort(startPort);

    // Port should be a number
    assertEquals(typeof port, "number");

    // Port should be >= startPort
    assertEquals(port >= startPort, true);

    // Port should be in valid range
    assertEquals(port > 0 && port < 65536, true);
  });
});

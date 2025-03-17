import { assertEquals, assertRejects } from "jsr:@std/assert";
import { join } from "jsr:@std/path";
import { afterEach, beforeEach, describe, it } from "jsr:@std/testing/bdd";
import {
  createFileWithContent,
  deleteFileIfExists,
} from "../deno-common/file.ts";

describe("shell", () => {
  const PORT_FILE = ".port";
  const TEST_PORT = "5000";

  beforeEach(async () => {
    // Create test port file
    await createFileWithContent(PORT_FILE, TEST_PORT);
  });

  afterEach(async () => {
    // Cleanup test port file
    await deleteFileIfExists(PORT_FILE);
  });

  it("should read correct port from file", async () => {
    const content = await Deno.readTextFile(PORT_FILE);
    assertEquals(content, TEST_PORT);
  });

  it("should fail when port file doesn't exist", async () => {
    await deleteFileIfExists(PORT_FILE);
    await assertRejects(
      async () => {
        await Deno.readTextFile(PORT_FILE);
      },
      Error,
      // "No such file or directory", // message isn't OS agnostic
    );
  });

  it("should have valid error.html file", async () => {
    const errorHtmlPath = join(Deno.cwd(), "app", "error.html");
    const content = await Deno.readTextFile(errorHtmlPath);
    assertEquals(
      content.includes("<h1>Error</h1>"),
      true,
      "error.html should contain error heading",
    );
  });
});

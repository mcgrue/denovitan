import { assertEquals } from "jsr:@std/assert";
import { add } from "./add.ts";

Deno.test("simple test", () => {
  const x = add(1, 2);
  assertEquals(x, 3);
});

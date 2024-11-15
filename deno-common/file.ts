import { exists } from "https://deno.land/std/fs/mod.ts";

export const readFileContents = async (filePath: string): Promise<string> => {
  return await Deno.readTextFile(filePath);
};

export const deleteFileIfExists = async (filePath: string): Promise<void> => {
  if (await exists(filePath)) {
    await Deno.remove(filePath);
    console.log(`File ${filePath} deleted.`);
  } else {
    console.log(`File ${filePath} does not exist.`);
  }
};

export const createFileWithContent = async (
  filePath: string,
  content: string,
): Promise<void> => {
  await Deno.writeTextFile(filePath, content);
  console.log(`File ${filePath} created with content: ${content}`);
};

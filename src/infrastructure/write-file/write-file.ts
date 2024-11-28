import { FileError } from "@/domain/error/file-error";
import fs from "node:fs/promises";

export class WriteFile {
  static async writeJson(pathFile: string, json: any): Promise<boolean> {
    return fs
      .writeFile(pathFile, JSON.stringify(json, null, 2))
      .then(() => true)
      .catch((err) => {
        throw new FileError(err);
      });
  }

  static async readJson(pathFile: string): Promise<any | null> {
    return fs
      .readFile(pathFile, { encoding: "utf8" })
      .then((data): any | null => {
        if (!data) return null;
        return JSON.parse(data);
      })
      .catch((err) => {
        throw new FileError(err);
      });
  }
}

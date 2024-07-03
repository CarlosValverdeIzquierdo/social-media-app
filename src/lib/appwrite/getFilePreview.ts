import { appwriteConfig, storage } from "./config";

export function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      top,
      100
    );

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

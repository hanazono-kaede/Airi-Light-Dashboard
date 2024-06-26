import { marked } from "marked";

export const pickImagesFromMarkdown = (text: string) => {
  const ast = marked.lexer(text);
  const images = new Set<string>();
  function pickImage(node: any) {
    if (node.type === "image") {
      images.add(node.href);
      return;
    }
    if (node.tokens && Array.isArray(node.tokens)) {
      return node.tokens.forEach(pickImage);
    }
  }
  ast.forEach(pickImage);

  return [...images.values()];
};

const videoExts = ["mp4", "webm", "ogg", "avi", "mov", "flv", "wmv", "mkv"];

export const isVideoExt = (ext: string) => {
  return videoExts.includes(ext);
};

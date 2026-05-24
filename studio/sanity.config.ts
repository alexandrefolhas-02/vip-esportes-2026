import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postType } from "./schemas/post";

export default defineConfig({
  name: "vip-esportes",
  title: "VIP Esportes — Blog Admin",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conteúdo")
          .items([S.documentTypeListItem("post").title("Posts do Blog")]),
    }),
    visionTool(),
  ],
  schema: { types: [postType] },
});

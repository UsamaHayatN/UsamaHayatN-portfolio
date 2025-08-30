import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "dvuiz4o3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-08-30",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

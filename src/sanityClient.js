import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "dvuiz4o3",
  dataset: "production",
  apiVersion: "2023-08-30",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

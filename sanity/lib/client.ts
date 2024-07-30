import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

export const WriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
  token,
});

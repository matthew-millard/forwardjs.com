import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const pastEvents = defineCollection({
  loader: file("./src/data/pastEvents.json"),
});

const upcomingEvents = defineCollection({
  loader: file("./src/data/upcomingEvents.json"),
});

export const collections = { pastEvents, upcomingEvents };

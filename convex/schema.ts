import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  baords: defineTable({
    tile: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
  })
    .index("byOrgId", ["orgId"])
    .searchIndex("search_title", {
      searchField: "tile",
      filterFields: ["orgId"],
    }),
});

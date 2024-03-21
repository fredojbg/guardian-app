import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("byOrgId", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),

  userFavorites: defineTable({
    orgId: v.string(),
    userId: v.string(),
    boardId: v.id("boards"),
  })
    .index("by_board", ["boardId"])
    .index("by_user_org", ["userId", "orgId"])
    .index("by_user_board", ["userId", "boardId"])
    .index("by_user_board_org", ["userId", "boardId", "orgId"]),

  contacts: defineTable({
    name: v.string(),
    orgId: v.string(),
    phone: v.string(),
    cpf: v.string(),
    email: v.string(),
    numCars: v.string(),
  })
    .index("byOrgId", ["orgId"])
    .searchIndex("search_cpf", {
      searchField: "cpf",
      filterFields: ["orgId"],
    })
    .searchIndex("search_name", {
      searchField: "name",
      filterFields: ["orgId"],
    }),

  cars: defineTable({
    model: v.string(),
    brand: v.string(),
    year: v.number(),
    contactId: v.id("contacts"),
  })
    .index("byContactId", ["contactId"])
    .index("byMake", ["brand"]),
});

import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const name = args.search as string;
    let contacts = [];

    if (name) {
      contacts = await ctx.db
        .query("contacts")
        .withSearchIndex("search_name", (q) =>
          q.search("name", name).eq("orgId", args.orgId)
        )
        .collect();
    } else {
      contacts = await ctx.db
        .query("contacts")
        .withIndex("byOrgId", (q) => q.eq("orgId", args.orgId))
        .collect();
    }

    return contacts;
  },
});

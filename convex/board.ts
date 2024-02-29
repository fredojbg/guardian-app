import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    tile: v.string(),
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }
  },
});

import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholder/1.svg",
  "/placeholder/2.svg",
  "/placeholder/3.svg",
  "/placeholder/4.svg",
  "/placeholder/5.svg",
  "/placeholder/6.svg",
  "/placeholder/7.svg",
  "/placeholder/8.svg",
  "/placeholder/9.svg",
  "/placeholder/10.svg",
];

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

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = ctx.db.insert("baords", {
      tile: args.tile,
      orgId: args.orgId,
      authorId: indentity.subject,
      authorName: indentity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

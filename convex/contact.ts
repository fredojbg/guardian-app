import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
    orgId: v.string(),
    phone: v.string(),
    cpf: v.string(),
    email: v.string(),
    numCars: v.number(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const contact = ctx.db.insert("contacts", {
      name: args.name,
      orgId: args.orgId,
      phone: args.phone,
      cpf: args.cpf,
      email: args.email,
      numCars: args.numCars,
    });

    return contact;
  },
});

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", indentity.subject).eq("boardId", args.id)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("boards"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is required");
    }

    if (title.length > 60) {
      throw new Error("Title cannot be longer than 60");
    }

    const board = await ctx.db.patch(args.id, {
      title: args.title,
    });

    return board;
  },
});

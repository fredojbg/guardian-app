import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
    orgId: v.string(),
    phone: v.string(),
    cpf: v.string(),
    email: v.string(),
    numCars: v.string(),
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
    id: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("contacts"),
    name: v.string(),
    orgId: v.string(),
    phone: v.string(),
    cpf: v.string(),
    email: v.string(),
    numCars: v.string(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const board = await ctx.db.patch(args.id, {
      name: args.name,
      phone: args.phone,
      cpf: args.cpf,
      email: args.email,
      numCars: args.numCars,
    });

    return board;
  },
});

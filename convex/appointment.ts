import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.string(),
    orgId: v.string(),
    note: v.string(),
    appointmentDate: v.string(),
    services: v.object({
      serviceId: v.id("services"),
    }),
    userId: v.string(),
    customerId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const contact = ctx.db.insert("appointments", {
      title: args.title,
      orgId: args.orgId,
      note: args.note,
      appointmentDate: args.appointmentDate,
      services: args.services,
      userId: indentity.subject,
      completed: false,
      canceled: false,
      customerId: args.customerId,
    });

    return contact;
  },
});

export const update = mutation({
  args: {
    id: v.id("appointments"),
    title: v.string(),
    orgId: v.string(),
    note: v.string(),
    appointmentDate: v.string(),
    services: v.object({
      serviceId: v.id("services"),
    }),
    customerId: v.id("contacts"),
    completed: v.boolean(),
    canceled: v.boolean(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Not logged in");
    }

    const contact = ctx.db.patch(args.id, {
      title: args.title,
      orgId: args.orgId,
      note: args.note,
      appointmentDate: args.appointmentDate,
      services: args.services,
      completed: args.completed,
      canceled: args.canceled,
      customerId: args.customerId,
    });

    return contact;
  },
});

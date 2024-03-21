"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormEventHandler, useEffect, useState } from "react";
import { useRenameModal } from "@/store/use-rename-modal";
import {
  DialogContent,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAddUserModal } from "@/store/use-add-user-modal";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres",
  }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  cpf: z.string(),
  email: z.string().email("Invalid Email!"),
  numCars: z.string(),
});

export const UserAddModal = () => {
  const { mutate, pending } = useApiMutation(api.contact.create);
  const { isOpen, initialValues, onOpen, onClose } = useAddUserModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      cpf: "",
      email: "",
      numCars: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // e.preventDefault();
    mutate({
      orgId: initialValues.orgID,
      ...values,
    }).then(() => toast.success("Usuario Criado"));
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar novo cliente</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu numero" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu cpf" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numCars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantos carros</FormLabel>
                  <FormControl>
                    <Input placeholder="Quantos carros tem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-2">
              <DialogClose>
                <Button type="button" variant={"outline"}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

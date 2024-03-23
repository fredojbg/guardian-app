"use client";

import { AddSaleModal } from "@/components/modals/add-sale-modal";
import { RenameModal } from "@/components/modals/rename-modal";
import { UserAddModal } from "@/components/modals/user-add-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
      <UserAddModal />
      <AddSaleModal />
    </>
  );
};

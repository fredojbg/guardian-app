import { create } from "zustand";

const defaultValues = {
  orgID: "",
};

interface IAddSaleModal {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpen: (name: string) => void;
  onClose: () => void;
}

export const useAddSaleModal = create<IAddSaleModal>((set) => ({
  isOpen: false,
  initialValues: defaultValues,
  onOpen: (orgID) => set({ isOpen: true, initialValues: { orgID } }),
  onClose: () => set({ isOpen: false, initialValues: defaultValues }),
}));

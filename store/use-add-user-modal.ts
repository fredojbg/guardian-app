import { create } from "zustand";

const defaultValues = {
  orgID: "",
};

interface IAddUserModal {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpen: (name: string) => void;
  onClose: () => void;
}

export const useAddUserModal = create<IAddUserModal>((set) => ({
  isOpen: false,
  initialValues: defaultValues,
  onOpen: (orgID) => set({ isOpen: true, initialValues: { orgID } }),
  onClose: () => set({ isOpen: false, initialValues: defaultValues }),
}));

import { create } from "zustand";
// import { createSelectors } from "./create-selector";

interface MoonState {
  activeSideBarTab: "casino" | "lottery" | "sport";
  activeBetTab: "manual" | "auto";
  persistIcon: string | null;
}

type MoonAction = {
  setActiveSideBarTab: (tab: MoonState["activeSideBarTab"]) => void;
  setActiveBetTab: (tab: MoonState["activeBetTab"]) => void;
  setPersistIcon: (icon: string) => void;
};

export const useMoonStore = create<MoonState & MoonAction>(
  (set) =>
    ({
      activeSideBarTab: "casino",
      activeBetTab: "manual",
      persistIcon: null,

      setActiveSideBarTab: (tab: MoonState["activeSideBarTab"]) =>
        set(() => ({ activeSideBarTab: tab })),
      setActiveBetTab: (tab: MoonState["activeBetTab"]) =>
        set(() => ({ activeBetTab: tab })),
      setPersistIcon: (icon: string) => set(() => ({ persistIcon: icon })),
    } as const)
);

// export const useMoonStore = createSelectors(useStore);

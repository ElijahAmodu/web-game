import { useEffect } from "react";
import { useMoonStore } from "@/store/store";

const useWalletIconPersist = () => {
  const persistIcon = useMoonStore((state) => state.persistIcon);
  const setPersistIcon = useMoonStore((state) => state.setPersistIcon);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const storedIcon = localStorage.getItem("walletIcon");
    if (storedIcon) {
      setPersistIcon(storedIcon);
    }
  }, []);

  return persistIcon || "/icons/crypto-small.svg";
};

export default useWalletIconPersist;

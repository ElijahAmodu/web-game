"use client";

import "@rainbow-me/rainbowkit/styles.css";

import type React from "react";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { Chain } from "wagmi/chains";
import {
  WALLET_CONNECT_PROJECT_ID,
  POSTHOG_HOST,
  POSTHOG_KEY,
} from "@/config/env";
import { theme } from "@/style/rainbowkit-theme";
import WalletAvatar from "../wallet-avatar/wallet-avatar";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export const ethereum = {
  id: 1,
  name: "Ethereum Mainnet",
  testnet: false,
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-rpc.publicnode.com"],
    },
    public: {
      http: ["https://ethereum-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://etherscan.io/" },
  },
} satisfies Chain;

export const base = {
  id: 8453,
  name: "Base",
  testnet: false,
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://base-rpc.publicnode.com"],
    },
    public: {
      http: ["https://base-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://basescan.org/" },
  },
};

if (typeof window !== "undefined") {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
  });
}

export const config = getDefaultConfig({
  appName: "2dMoon",
  projectId: WALLET_CONNECT_PROJECT_ID || "",
  chains: [base, ethereum],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={theme}
          modalSize="compact"
          avatar={WalletAvatar}
        >
          <PostHogProvider client={posthog}>{children}</PostHogProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

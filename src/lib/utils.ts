import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateAddress = (
  address: string,
  num?: number,
  ellipsis?: boolean
) => {
  if (address?.length <= 10) {
    return address;
  }
  return `${address?.slice(0, num ?? 6)}${
    !ellipsis ? "" : "...."
  }${address?.slice(-(num ?? 6))}`;
};

export const truncateDescription = (
  address: string,
  num?: number,
  ellipsis?: boolean
) => {
  if (address?.length <= 10) {
    return address;
  }
  return `${address?.slice(0, num ?? 6)}${!ellipsis ? "" : "...."}`;
};

export const truncateRedeemHash = (
  address: string,
  beginningNumber?: number,
  nuendingNumberm?: number,
  ellipsis?: boolean
) => {
  if (address?.length <= 10) {
    return address;
  }
  return `${address?.slice(0, beginningNumber ?? 3)}${
    !ellipsis ? "" : "...."
  }${address?.slice(-(nuendingNumberm ?? 6))}`;
};

// rounds amount to integer, 2 decimals if its 123.123123 or - 123.123123, to significantFigures = 3 if its 0.000023423423 -> 0.0000234
export const roundAmount = (
  amount: number | string | undefined,
  decimals = 3
): number => {
  if (!amount) return 0;

  const numAmount = Number(amount);

  if (Number.isInteger(numAmount)) return numAmount;

  if (numAmount > -1 && numAmount < 1) {
    const multiplier =
      10 ** (decimals - Math.floor(Math.log10(Math.abs(numAmount))) - 1);
    return Math.round(numAmount * multiplier) / multiplier;
  }

  return Number(numAmount.toFixed(decimals));
};

export const roundBalance = (balance?: string): string | null => {
  if (!balance) return null;
  // Convert the formatted balance from string to number
  const balanceInNumber = Number.parseFloat(balance);
  // Format the number to 2 decimal places
  return balanceInNumber.toFixed(2);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// formats usd amount 234675 => $234,675
export const formatUsd = (value: number | string) =>
  `$${value.toLocaleString()}`;

export const formatPercent = (value?: number) =>
  value ? `${roundAmount(value * 100, 2)}%` : "-";

export const token1ToToken2Price = (
  priceToken1USD: number | undefined,
  priceToken2USD: number | undefined
): string => {
  if (!priceToken1USD || !priceToken2USD) return "-";

  return String(roundAmount(priceToken1USD / priceToken2USD));
};

export const formatLargeNumber = (number: number): string => {
  const suffixes = ["K", "M", "B", "T", "q", "Q", "S", "Sp", "O", "N"];
  const absoluteNumber = Math.abs(number);

  if (absoluteNumber < 1000) {
    return number.toString();
  }

  let suffixIndex = Math.floor((Math.log10(absoluteNumber) - 3) / 3);
  if (suffixIndex >= suffixes.length) {
    suffixIndex = suffixes.length - 1;
  }

  const size = 1000 ** (suffixIndex + 1);
  const formattedNumber = (number / size).toFixed(1);
  return `${formattedNumber}${suffixes[suffixIndex]}`;
};

export const formatTokenSymbol = (symbol: string): string =>
  symbol.toUpperCase();

export const getConversionRates = (
  price: number,
  fromDecimals: number,
  toDecimals: number
): [number, number] => {
  if (fromDecimals === toDecimals) return [price, 1 / price];
  const fromToPrice = price * 10 ** (fromDecimals - toDecimals);
  const toFromPrice = 1 / fromToPrice;
  return [fromToPrice, toFromPrice];
};

/**
 * Parses any value to bigInt
 * https://github.com/colinhacks/zod/discussions/1897
 */

export const formatWithSpaces = (value: string | undefined): string => {
  if (!value) return "";

  const parts = value.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};

interface socialSchema {
  href: string;
  src: string;
  alt: string;
}

export const Socials: socialSchema[] = [
  {
    href: "https://x.com/0xpepperhq",
    src: "/icons/Twitter.svg",
    alt: "Twitter",
  },
  {
    href: "#",
    src: "/icons/gram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/pepperfi/posts/?feedView=all",
    src: "/icons/linked-in.svg",
    alt: "LinkedIn",
  },
];

export const formatUsdValue = (value: number) => {
  return value >= 1
    ? value.toFixed(2) // Use two decimal places for values >= 1
    : value.toFixed(2); // Also two decimal places for values < 1
};

export const formatBalance = (balance: string) => {
  const value = Number.parseFloat(balance);
  // If value is very small, format to 4 decimal places
  if (value < 1) {
    return value.toFixed(4); // Show 4 decimal places
  }
  // Otherwise, show as is
  return value.toString();
};

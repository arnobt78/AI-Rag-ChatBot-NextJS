import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind CSS classnames function
// This function is used to merge Tailwind CSS classnames with other classnames, not to use default Tailwind CSS classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const safeFetch = async <T>(
  url: string,
  options?: RequestInit
): Promise<{ data: T | null; error: string | null }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        data: json as T,
        error: json?.meta?.message || json?.message || "خطا",
      };
    }

    return { data: json as T, error: null };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { data: null, error: err.message || "خطای ناشناخته" };
  }
};

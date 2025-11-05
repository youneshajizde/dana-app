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
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    console.log("Fetching:", fullUrl, options); 

    const res = await fetch(fullUrl, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    let json: any = null;
    try {
      json = await res.json();
    } catch {
     
    }

    if (!res.ok) {
      const message =
        json?.meta?.message || json?.message || `HTTP ${res.status}`;
      return { data: null, error: message };
    }

    return { data: json as T, error: null };
  } catch (err: any) {
    return { data: null, error: err?.message ?? "خطای ناشناخته" };
  }
};

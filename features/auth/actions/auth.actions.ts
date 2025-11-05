"use server";

import { safeFetch } from "@/shared/utils/functions";
import { sendOTPSchema, verifyOTPSchema } from "../schemas/auth.schema";
import { redirect } from "next/navigation";
import { SendOTPResponse } from "../types/auth.types";

export async function sendOTPAction(fd: FormData) {
  const mobile = fd.get("mobile") as string;
  console.log("Mobile:", mobile);

  const parsed = sendOTPSchema.safeParse({ mobile });
  if (!parsed.success) {
    throw new Error("شماره موبایل نامعتبر است");
  }

  const { data, error } = await safeFetch<SendOTPResponse>(
    `/auth/request-otp`, // relative to API_URL
    {
      method: "POST",
      body: JSON.stringify({ mobile }),
    }
  );

  // Check API response first
  if (data?.meta.code !== "successful") {
    throw new Error(data?.meta.message || "خطا در ارسال کد");
  }

  // Then network error
  if (error) {
    throw new Error(error);
  }

  redirect(`/otp?mobile=${mobile}`);
}

export async function verifyOTPAction(fd: FormData) {
  const mobile = fd.get("mobile")?.toString();
  const otp = fd.get("otp")?.toString();

  const parsed = verifyOTPSchema.safeParse({ mobile, otp });
  if (!parsed.success) throw new Error(parsed.error.message);

  return safeFetch(`/auth/verify-otp`, {
    method: "POST",
    body: JSON.stringify({ mobile, otp }),
  });
}

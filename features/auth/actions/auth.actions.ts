"use server";

import { ZodError } from "zod";
import { redirect } from "next/navigation";
import { safeFetch } from "@/shared/utils/functions";
import { SendOTPResponse } from "../types/auth.types";
import { sendOTPSchema, verifyOTPSchema } from "../schemas/auth.schema";


export async function sendOTPAction(fd: FormData) {
  const mobile = fd.get("mobile") as string;
  const parsed = sendOTPSchema.safeParse({ mobile });
  if (!parsed.success) {
    const firstError = (parsed.error as ZodError).issues[0]?.message;
    return { error: firstError || "شماره موبایل نامعتبر است" };
  }

  const { data, error } = await safeFetch<SendOTPResponse>(
    `/auth/request-otp`,
    {
      method: "POST",
      body: JSON.stringify({ mobile }),
    }
  );

  if (error) return { error };
  if (data?.meta.code !== "successful") {
    return { error: data?.meta.message || "خطا در ارسال کد" };
  }

  redirect(`/otp?mobile=${mobile}`);
}



export async function verifyOTPAction(fd: FormData) {
  const mobile = fd.get("mobile")?.toString() || "";
  const otp = fd.get("otp")?.toString() || "";

  const parsed = verifyOTPSchema.safeParse({ mobile, otp });
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message;
    return { error: firstError || "خطا در اعتبارسنجی OTP" };
  }

  const { data, error } = await safeFetch<SendOTPResponse>(`/auth/verify-otp`, {
    method: "POST",
    body: JSON.stringify({ mobile, otp }),
  });

  if (error) return { error };
  if (data?.meta.code !== "successful") {
    return { error: data?.meta.message || "خطا در ارسال کد" };
  }

  return { success: true };
}

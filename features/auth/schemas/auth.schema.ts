import { z } from "zod";

export const sendOTPSchema = z.object({
  mobile: z.string().regex(/^09\d{9}$/, "شماره موبایل نامعتبر است"),
});

export const verifyOTPSchema = z.object({
  mobile: z.string().regex(/^09\d{9}$/, "شماره موبایل نامعتبر است"),
  otp: z.string().length(5, "OTP باید 5 رقمی باشد"),
});

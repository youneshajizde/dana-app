"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { sendOTPAction } from "../actions/auth.actions";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(fd: FormData) {
    const result = await sendOTPAction(fd);
    if (result?.error) {
      setError(result.error);
    }
  }
  return (
    <form action={handleSubmit} className="mt-6 flex flex-col flex-1 h-screen">
      <div className="space-y-3 flex-1 overflow-y-auto">
        <p className="text-xs">
          <span className="text-sm font-medium">شماره موبایل</span> . برای ورود
          یا ثبت نام شماره خود را وارد کنید
        </p>

        <Input
          name="mobile"
          placeholder="09xxxxxxxxx"
          className="h-12 bg-white/15 text-white rounded-xl border border-transparent 
          focus:border-primary focus-visible:outline-none 
          focus-visible:ring-0 focus-visible:ring-offset-0 
          text-left placeholder:text-white/50 
          transition duration-200"
        />

        {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
        <p className="text-xs">
          با ورود ،{" "}
          <span className="text-primary underline">قوانین و مقررات</span>{" "}
          استفاده از واندرگیفت را می‌پذیرم.
        </p>
      </div>

      <div className="mt-auto">
        <Button
          type="submit"
          className="bg-primary text-white rounded-xl w-full"
        >
          ارسال کد به شماره
        </Button>
      </div>
    </form>
  );
}

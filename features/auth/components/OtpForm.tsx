"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { verifyOTPAction } from "../actions/auth.actions";

const OtpForm = ({ mobile }: { mobile: string }) => {
  const [otp, setOtp] = useState("");

  return (
    <form
      action={async (fd: FormData) => {
        fd.set("otp", otp);
        fd.set("mobile", mobile);
        const result = await verifyOTPAction(fd);
        console.log(result);
      }}
      className="mt-6 flex flex-col flex-1 h-screen"
    >
      <input type="hidden" name="mobile" value={mobile} />

      <div className="space-y-3 flex-1 overflow-y-auto">
        <p className="text-xs">
          <span className="text-sm font-medium">تأیید موبایل</span> کد ارسال شده
          به {mobile} را وارد کنید.
        </p>

        <section className="w-full">
          <div className="flex justify-center">
            <InputOTP
              maxLength={5}
              value={otp}
              onChange={setOtp}
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d*"
              containerClassName="flex !important"
            >
              <InputOTPGroup className="flex gap-3">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </section>

        <p className="text-xs text-white/30">
          درخواست دوباره کد تا{" "}
          <span className="text-white font-medium">۳۰ ثانیه</span>
        </p>
      </div>

      <div className="sticky bottom-4">
        <Button
          type="submit"
          className="bg-primary text-white rounded-xl w-full"
        >
          تأیید
        </Button>
      </div>
    </form>
  );
};

export default OtpForm;

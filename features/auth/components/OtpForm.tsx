"use client";

import { OtpFields } from "./OtpFields";
import { Button } from "@/components/ui/button";

const OtpForm = ({ mobile }: { mobile: string }) => {
  return (
    <form className="mt-6 flex flex-col flex-1 h-screen">
      <input type="hidden" name="mobile" value={mobile} />

      <div className="space-y-3 flex-1 overflow-y-auto">
        <p className="text-xs">
          <span className="text-sm font-medium">تأیید موبایل</span> کد ارسال شده به {mobile} را وارد کنید.
        </p>

        <div className="f-center w-full">
          <OtpFields />
        </div>

        <p className="text-xs text-white/30">
          درخواست دوباره کد تا{" "}
          <span className="text-white font-medium">۳۰ ثانیه</span>
        </p>
      </div>

      <div className="sticky bottom-4">
        <Button type="submit" className="bg-primary text-white rounded-xl w-full">
          تأیید
        </Button>
      </div>
    </form>
  );
};

export default OtpForm;

// @/components/ui/input-otp.tsx
"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const toPersianDigits = (str: string) =>
  str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      dir="ltr"
      className={cn(
        "absolute -left-full -top-full w-px h-px opacity-0 pointer-events-none overflow-hidden",
        className
      )}
      containerClassName={cn(
        "flex items-center justify-center gap-8",
        containerClassName
      )}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      dir="ltr"
      style={{ direction: "ltr" }}
      className={cn(
        "flex flex-row items-center [direction:ltr] shrink-0",
        className
      )}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext?.slots[index] ?? {};
  const { char, hasFakeCaret, isActive } = slot;

  const persianChar = char != null ? toPersianDigits(char) : null;

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-12 w-12 items-center justify-center rounded-lg",
        "border border-white/30 bg-white/15 text-white text-lg font-medium",
        "transition-all outline-none shrink-0 select-none",
        "data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/30 data-[active=true]:bg-white/20",
        className
      )}
      {...props}
    >
      {persianChar !== null ? (
        persianChar
      ) : (
        <span className="text-white">-</span>
      )}

      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-white w-0.5 h-7 rounded-full" />
        </div>
      )}
    </div>
  );
}


function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon className="h-4 w-4 text-white/30" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

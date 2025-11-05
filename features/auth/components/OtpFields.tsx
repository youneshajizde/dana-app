"use client"

import { useRef, useState, type KeyboardEvent, type ClipboardEvent } from "react"
import { cn } from "@/lib/utils"

interface OTPInputProps {
  onComplete?: (otp: string) => void
}

export function OtpFields({ onComplete }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }

    if (index === 4 && value) {
      const completeOtp = newOtp.join("")
      onComplete?.(completeOtp)
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 5)

    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split("").forEach((char, index) => {
      if (index < 5) {
        newOtp[index] = char
      }
    })
    setOtp(newOtp)

    const nextEmptyIndex = newOtp.findIndex((val) => !val)
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[4]?.focus()
      onComplete?.(newOtp.join(""))
    }
  }

  return (
    <div className="flex gap-6">
      {otp.map((digit, index) => (
        <div key={index} className="relative">
          <input
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={cn(
              "w-12 h-12 text-center text-lg font-semibold rounded-xl border-2 transition-colors",
              "focus:outline-none",
              digit ? "border-primary bg-white/15 text-white" : " bg-white/15 text-muted-foreground",
            )}
            aria-label={`OTP digit ${index + 1}`}
          />
          {!digit && (
            <div className="absolute text-white inset-0 flex items-center justify-center pointer-events-none text-muted-foreground text-lg">
              -
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

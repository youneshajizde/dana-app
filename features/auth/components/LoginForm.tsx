import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendOTPAction } from "../actions/auth.actions";

const LoginForm = () => {
  return (
    <form action={sendOTPAction} className="mt-6 flex flex-col flex-1 h-screen">
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
};

export default LoginForm;

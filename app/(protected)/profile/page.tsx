import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="pt-16 px-3">
      <section className="space-y-3">
        <p className="text-xl f-align gap-1.5">
          پروفایل کاربری
          <Image
            alt="logo-sm"
            width={1000}
            height={1000}
            className="w-5.5 h-2.5"
            src={"/images/logo.png"}
          />
        </p>

        <p className="text-white/30 text-sm">
          هنوز ثبت نام نکرده اید! در این بخش اطلاعات مربوط به پروفایل کاربری شما
          نمایش داده میشه. ثبت نام
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Button
              className="flex-1 bg-primary/60 border border-primary rounded-xl flex items-center justify-center gap-2"
              style={{ height: "46px" }}
            >
              <Image
                width={24}
                height={24}
                src={"/images/telegram.png"}
                alt="telegram"
              />
              <span className="text-white text-sm font-medium">
                کانال تلگرام واندرگیفت
              </span>
            </Button>

            <Button
              className="flex-1 bg-primary/60 border border-primary rounded-xl flex items-center justify-center gap-2"
              style={{ height: "46px" }}
            >
              <Image
                width={24}
                height={24}
                src={"/images/instagram.png"}
                alt="telegram"
              />
              <span className="text-white text-sm font-medium">
                پیج اینستاگرام واندرگیفت{" "}
              </span>
            </Button>
          </div>
        </div>
      </section>

      <ul className="flex flex-col space-y-3 mt-6">
        <Link
          href={"/random"}
          className="flex items-center gap-3 border-b border-white/15 p-3"
        >
          <Image
            src={"/icons/logout.svg"}
            alt="logout"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-white">ورود و عضویت</span>
        </Link>

        <Link
          href={"/random"}
          className="flex items-center gap-3 border-b border-white/15 p-3"
        >
          <Image
            src={"/icons/card.svg"}
            alt="logout"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-white">حساب‌های بانکی</span>
        </Link>

        <Link
          href={"/random"}
          className="flex items-center gap-3 border-b border-white/15 p-3"
        >
          <Image
            src={"/icons/card.svg"}
            alt="call"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-white">ارتباط با پشتیبانی</span>
        </Link>

          <Link href={"/random"} className="flex items-center gap-3 border-b border-white/15 p-3">
          <Image
            src={"/icons/card.svg"}
            alt="bug"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-white">گزارش مشکل</span>
        </Link>

          <Link href={"/random"} className="flex items-center gap-3 border-b border-white/15 p-3">
          <Image
            src={"/icons/card.svg"}
            alt="handshake"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm text-white">همکاری در فروش</span>
        </Link>
      </ul>
    </div>
  );
};

export default ProfilePage;

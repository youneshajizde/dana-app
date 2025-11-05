import OtpForm from "@/features/auth/components/OtpForm";
import TopNavigation from "@/shared/components/molecules/TopNavigation";
import Image from "next/image";

const OtpPage = ({ searchParams }: { searchParams: { mobile?: string } }) => {
  const mobile = searchParams.mobile ?? "";

  return (
    <div className="min-h-screen flex flex-col px-3 pt-16">
      <TopNavigation />

      <div className="f-center">
        <Image
          alt="logo"
          src={"/images/logo.png"}
          width={1000}
          height={1000}
          className="w-[106px]"
        />
      </div>

      <OtpForm mobile={mobile} />
    </div>
  );
};

export default OtpPage;

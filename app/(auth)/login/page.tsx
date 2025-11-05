import LoginForm from "@/features/auth/components/LoginForm";
import TopNavigation from "@/shared/components/molecules/TopNavigation";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col px-3 pt-16 pb-4">
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

      <LoginForm />
    </div>
  );
};

export default LoginPage;

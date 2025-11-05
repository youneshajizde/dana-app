"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TopNavigation = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end">
      <Button onClick={() => router.back()} className="bg-white cursor-pointer rounded-full size-9 text-black">
        <ArrowLeft />
      </Button>
    </div>
  );
};

export default TopNavigation;

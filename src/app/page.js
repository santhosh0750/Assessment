"use client";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // console.log("Page component mounted");
    router.push("/DashBord");
  }, []);
  return (
    <div className="h-screen flex   justify-center items-center ">
      <CircularProgress />
    </div>
  );
}

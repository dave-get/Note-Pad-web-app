"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GithubLoginButton } from "./github-signin";
import { LoginForm } from "@/type/index";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "@/lib/actions/server-functions";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginForm) => {
    const res = await login(data);

    console.log("res************", res);

    if (res?.ok) {
      toast.success("Sign in successfully");
      router.push("/homePage");
    }
    if (!res?.ok) {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[35%] border border-white space-y-10 mt-10 px-10 py-20 rounded-2xl">
      <div className="flex flex-col space-y-5 items-center px-10">
        <p className="text-4xl font-bold text-white font-irish-grover">Login</p>
        <p className="text-[#8A8F98] text-sm">
          Welcome back! Access your notes anytime, anywhere with a secure and
          seamless login.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 w-full"
        suppressHydrationWarning
      >
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border-1 w-full border-white rounded-md py-2 px-5 text-sm text-white outline-none"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="border-1 w-full border-white rounded-md py-2 px-5 text-sm text-white outline-none"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="border border-white text-[#5C63FF] px-2 py-1 text-center rounded-full w-[30%] text-sm cursor-pointer"
        >
          Login
        </button>
      </form>
      <div className="flex justify-between w-full">
        <form action="">
          <div className="flex items-center space-x-2 cursor-pointer border p-2 border-white/30 rounded">
            <Image src="/icons/google.svg" alt="" width={20} height={20} />
            <p className="text-white text-sm font-bol">Sign up with Google</p>
          </div>
        </form>
        <GithubLoginButton />
      </div>
    </div>
  );
};

export default Login;

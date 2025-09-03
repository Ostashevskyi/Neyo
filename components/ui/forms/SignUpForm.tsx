"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpData } from "@/utils/schemas/signup";

import { Input } from "../inputs/Input";
import { PasswordInput } from "../inputs/PasswordInput";
import { toast } from "sonner";
import { SubmitButton } from "../buttons/SubmitButton";
import { signup } from "@/app/(auth)/signup/actions/actions";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const onSubmit = async (data: SignUpData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const res = await signup(formData);

    if (!res.success) {
      if (typeof res.errors === "string") {
        toast.error(res.errors);
      } else if (res.errors) {
        Object.entries(res.errors).forEach(([field, messages]) => {
          setError(field as keyof SignUpData, { message: messages?.[0] });
        });
      }
      return;
    }

    toast.success("Account created successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="flex w-full flex-col gap-1">
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <PasswordInput
        placeholder="Password"
        {...register("password")}
        error={errors.password?.message}
      />

      <PasswordInput
        placeholder="Confirm password"
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />

      <SubmitButton disabled={isSubmitting}>{isSubmitting ? "Signing Up..." : "Sign Up"}</SubmitButton>
    </form>
  );
};

export default SignUpForm;

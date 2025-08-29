"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useRouter();
  const [state, formAction] = useActionState(login, undefined, {
    onSuccess: () => {
      toast.success("Login successful!");
      navigate.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials and try again.");
    },
  });

  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
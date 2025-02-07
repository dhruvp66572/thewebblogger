"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useActionState } from "react";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);

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
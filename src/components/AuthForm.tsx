import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import type { AuthMode } from "@/types/auth";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "sonner";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleAuthMode() {
    if (authMode === "signin") {
      setAuthMode("signup");
    } else {
      setAuthMode("signin");
    }
  }

  function handleAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (authMode === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("account created");
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode);
        });
    }
  }

  return (
    <form onSubmit={handleAuth} className="space-y-4 text-center">
      <div className="space-y-2">
        <Label htmlFor="email">email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button className="w-full">
        {authMode === "signin" ? "sign in" : "sign up"}
      </Button>

      <p onClick={toggleAuthMode} className="cursor-pointer">
        {authMode === "signin"
          ? "don't have an account?"
          : "already have an account?"}
      </p>
    </form>
  );
};

export default AuthForm;

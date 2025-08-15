import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { toast } from "sonner";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleAuthMode() {
    setAuthMode(authMode === "login" ? "signup" : "login");
  }

  function handleAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (authMode === "login") {
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    }
  }

  return (
    <div className="space-y-3">
      <h1>
        {authMode === "login"
          ? "log in to your account"
          : "create a new account"}
      </h1>

      <form className="space-y-3" onSubmit={handleAuth}>
        <Input
          value={email}
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" type="submit">
          {authMode === "login" ? "login" : "register"}
        </Button>
      </form>

      <p
        onClick={toggleAuthMode}
        className="cursor-pointer text-sm text-gray-500"
      >
        {authMode === "login"
          ? "don't have an account?"
          : "already have an account?"}
      </p>
    </div>
  );
};

export default AuthForm;

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UserButton = () => {
  const [authMode, setAuthMode] = useState("login");

  function toggleAuthMode() {
    setAuthMode(authMode === "login" ? "signup" : "login");
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="text-center">
        <h1>
          {" "}
          {authMode === "login"
            ? "log in to your account"
            : "create a new account"}
        </h1>

        <form className="space-y-3">
          <Input type="email" id="email" placeholder="email" />
          <Input type="password" id="password" placeholder="password" />
          <Button className="w-full">
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
      </DialogContent>
    </Dialog>
  );
};

export default UserButton;

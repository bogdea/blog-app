import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  return (
    <div>
      <Navbar />

      <Toaster richColors />
    </div>
  );
};

export default App;

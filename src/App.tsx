import Navbar from "./components/Navbar";
import { auth } from "./auth/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
  }, []);

  return (
    <div>
      <Navbar />

      {user?.email}

      <Toaster richColors />
    </div>
  );
};

export default App;

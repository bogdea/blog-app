import Navbar from "./components/Navbar";
import { auth } from "./auth/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Posts from "./components/Posts";
import { Route, Routes } from "react-router";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
  }, [user]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="posts" element={<Posts />} />
      </Routes>

      <Toaster richColors />
    </div>
  );
};

export default App;

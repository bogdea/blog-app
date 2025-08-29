import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

const App = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  return (
    <div className="p-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
      </Routes>

      <Toaster richColors />
    </div>
  );
};

export default App;

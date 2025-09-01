import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Post from "./pages/Post";

const App = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col px-5">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post/:postId" element={<Post />} />
        </Routes>
      </main>

      <Footer />

      <Toaster richColors />
    </div>
  );
};

export default App;

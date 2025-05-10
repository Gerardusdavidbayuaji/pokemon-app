import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "./ui/sonner";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#0d1d23] w-full h-screen flex justify-center">
      <div className="w-1/3 flex flex-col bg-white/10 backdrop-blur-sm rounded-md my-2 overflow-y-auto">
        <Header />
        <main className="grow text-center overflow-y-auto">{children}</main>
        <Toaster />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#0d1d23] w-full h-screen flex justify-center">
      <div className="w-1/3 max-sm:w-full flex flex-col bg-white/10 backdrop-blur-sm rounded-md my-2 overflow-y-auto">
        <Header />
        <main className="grow text-center overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

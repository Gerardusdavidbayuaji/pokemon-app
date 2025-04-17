import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#0d1d23] w-full h-screen flex justify-center">
      <div className="bg-white/10 w-2/5 flex flex-col backdrop-blur-sm rounded-md my-2">
        <Header />
        <main className="grow bg-amber-700 text-center p-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

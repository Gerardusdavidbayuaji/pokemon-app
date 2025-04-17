import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#0d1d23] w-full h-screen flex justify-center">
      <div className="w-1/3 flex flex-col rounded-md my-2 overflow-y-auto">
        <Header />
        <main className="grow bg-white/10 backdrop-blur-sm text-center p-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

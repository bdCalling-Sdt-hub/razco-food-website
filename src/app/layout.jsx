import { Poppins } from "@next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";
import RegisterModal from "@/Modal/RegisterModal";
import LoginModal from "@/Modal/loginModal";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>

        <AntdRegistry>
          <Navbar />
          <LoginModal/>
          <RegisterModal/>
          <div className="custom-class">{children}</div>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}

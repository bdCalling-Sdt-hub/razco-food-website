import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/Components/Share/Navbar/Navbar";
import Footer from "@/Components/Share/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Razco Food",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <Navbar />
          <div className="  mx-auto ms-5 me-5">{children}</div>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}

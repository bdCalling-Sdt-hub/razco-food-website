import { Poppins } from "@next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <ClientProvider>
          <div className="custom-class">{children}</div>
        </ClientProvider>
      </body>
    </html>
  );
}

import "../globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "../(redux)/provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Log Life Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <ReduxProvider>{children}</ReduxProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}

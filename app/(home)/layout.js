import { Inter } from "next/font/google";
import "../globals.css";
import { ReduxProvider } from "../(redux)/provider";
import AppNav from "../(components)/AppNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Log Life App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <ReduxProvider>
            <AppNav></AppNav>
          </ReduxProvider>
          <div className="flex-grow overflow-y-auto p-4">
            <ReduxProvider>{children}</ReduxProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import { ReduxProvider } from "./(redux)/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Log Life App",
  description: "Created by Clever Minds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <ReduxProvider>
            <Nav></Nav>
          </ReduxProvider>
          <div className="flex-grow overflow-y-auto p-4">
            <ReduxProvider>{children}</ReduxProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

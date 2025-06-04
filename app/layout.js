import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Common/Footer";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Creator IQ - AI Career Coach",
  description:
    "Creator IQ is your personal AI-powered career coach — offering tailored insights, content strategies, and growth tools to elevate your creator journey. Built for digital creators, influencers, and entrepreneurs.",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
     
            {/* header */}
            <Header />
            {children}
            {/* footer */}
            <Footer />
       
        </body>
      </html>
    </ClerkProvider>

  );
}

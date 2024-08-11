import type { Metadata } from "next";
import "@/lib/assets/globals.css";
import Navbar from "@/components/molecules/navbar";
import Footer from "@/components/molecules/footer";


export const metadata: Metadata = {
  title: {
    default: "Shange It",
    template: "%s — Shange It",
  },
  icons: "/Icon1.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='bg-white' style={{ fontFamily: 'MyFont' }}>
        <Navbar />
        <div className="bg-white">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

// todos, animated navbar


import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />
        {/* prompt input */}
        {children}
      </body>
    </html>
  );
}

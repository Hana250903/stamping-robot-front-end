import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}

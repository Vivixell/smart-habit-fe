import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "GrowTrack - Build Better Habits",
  description:
    "Stay consistent with smart reminders, streak tracking, and rewards designed to keep you motivated.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

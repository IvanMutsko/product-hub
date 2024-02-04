import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Product HUB",
  description: "Product HUB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

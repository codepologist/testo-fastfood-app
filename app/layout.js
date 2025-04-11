import "./globals.scss";

export const metadata = {
  title: "Testo Pizza and Fast Food Ordering App",
  description:
    "Testo - Your ultimate web app for ordering delicious pizza and fast food with ease and convenience.",
  keywords: [
    "Testo",
    "pizza",
    "burgers",
    "sushi",
    "steak",
    "fast food",
    "restaurant menu",
    "food delivery",
  ],
  authors: [{ name: "O'Neal Ombu" }],
  applicationName: "Testo App",
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

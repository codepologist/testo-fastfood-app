import "./globals.scss";

export const metadata = {
  title: "Testo Pizza and Fast Food Ordering App",
  description:
    "Testo - Your ultimate web app for ordering delicious pizza and fast food with ease and convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="O'Neal Ombu" />
        <meta
          name="description"
          content="Testo - Your ultimate web app for ordering delicious pizza and fast food with ease and convenience."
        />
        <meta
          name="keywords"
          content="Testo - Your go-to app for quick and delicious food, from pizza and burgers to sushi, steak, and more, straight from your favorite restaurant menu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/apple-touch-icon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}

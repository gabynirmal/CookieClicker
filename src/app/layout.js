export const metadata = {
  title: "Cookie Clicker",
  description: "Simple Cookie Clicker Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

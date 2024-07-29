// app/layout.tsx
import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.kanit.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

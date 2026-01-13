import NavbarItems from '@/components/molecules/navbar-items';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarItems />
        {children}
      </body>
    </html>
  );
}

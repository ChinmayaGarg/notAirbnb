import './globals.css';

export const metadata = {
  title: 'Not Airbnb',
  description: 'Airbnb Clone'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

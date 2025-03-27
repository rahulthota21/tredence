import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Travel Planner',
  description: 'Plan your trips smarter and better',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="">
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}

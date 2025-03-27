import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Travel Planner',
  description: 'Plan your trips smarter and better',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}

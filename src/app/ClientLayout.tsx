'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import ChatBubble from '@/components/ui/ChatBubble';
import FontWrapper from '@/components/wrappers/FontWrapper';
import { useEffect, useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isAuthPage = pathname?.startsWith('/sign-in') || pathname?.startsWith('/sign-up');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <FontWrapper>
        {!isAuthPage && <Navbar />}
        {!isAuthPage && <ChatBubble />}
        {children}
      </FontWrapper>
    </ThemeProvider>
  );
}

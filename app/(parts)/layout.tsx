import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Navbar } from "@/components/ui/Navbar";

import { Toaster } from "react-hot-toast";
import { Header } from '@/components/Header';

export default function PartsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full transition-colors duration-300 dark:bg-[#333333]`}>
        <AppRouterCacheProvider>
   
            <Navbar/>
            <Toaster/>
            <Header/>
            {children}
     
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

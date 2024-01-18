import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from "@/app/ui/sidenav";
import RightNav from './ui/right-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased h-screen flex flex-col`}>
        <div className="flex-grow flex flex-col gap-2 md:flex-row">
          <div className="w-full flex-none md:w-72">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto relative">
            {children}
          </div>
          <div className="w-full flex-none md:w-72 sm:hidden md:block">
            <RightNav />
          </div>
        </div>
        <div className="bg-zinc-900 text-neutral-300 flex items-center justify-center h-20">
          {/* Contenu de la dernière div */}
          <p>© floraaant</p>
        </div>
      </body>
    </html>
  );
}

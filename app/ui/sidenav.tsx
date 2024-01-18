import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Home, Library, Search } from '@/app/ui/nav/icon-link';
import Themes from './nav/themes';

export default function SideNav() {
  return (
    
    <div className="flex h-full flex-col bg-zinc-900">
      <div className="flex flex-wrap gap-2 m-2 bg-zinc-800 rounded-md">
          <Home/>
          <Search />
      </div>
      <div className="flex grow flex-row  space-x-2 h-full gap-2 m-2 bg-zinc-800 rounded-md md:flex-col md:space-x-0 md:space-y-2">
        <Library />
        <Themes />
      </div>
    </div>
  );
}

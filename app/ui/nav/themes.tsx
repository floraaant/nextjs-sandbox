import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowLeftIcon, ArrowRightIcon, PowerIcon } from '@heroicons/react/24/outline';

export default function Themes() {
  return (
    <div className="flex relative flex-nowrap overflow-x-auto no-scrollbar min-w-screen pl-2 gap-2 text-neutral-300">
      <div className="rounded-full flex  items-center justify-center pl-2 pr-2 py-1 pb-1 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
        <p className='text-center whitespace-nowrap'>
          Playlist
        </p>
      </div>
      <div className="rounded-full flex items-center justify-center pl-2 pr-2 py-1 pb-1 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
        <p className='text-center whitespace-nowrap'>
          Émissions et podcasts
        </p>
      </div>
      <div className="rounded-full flex items-center justify-center pl-2 pr-2 py-1 pb-1 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
        <p className='text-center whitespace-nowrap'>
          Albums
        </p>
      </div>
      <div className="rounded-full flex items-center justify-center pl-2 pr-2 py-1 pb-1 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
        <p className='text-center whitespace-nowrap'>
          Artistes
        </p>
      </div>
      <div className="rounded-full flex items-center justify-center pl-2 pr-2 py-1 pb-1 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
        <p className='text-center whitespace-nowrap'>
          Téléchargé(s)
        </p>
      </div>
    </div>
  );
}

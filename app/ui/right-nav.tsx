import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function RightNav() {
  return (
    
    <div className="flex h-full flex-col ">
      <Link
        className="mb-2 flex h-20 items-end justify-start  bg-blue-600 p-4 md:h-40"
        href="/"
        >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow  p-2 bg-gray-100 md:block">
          <p>Right nav is different</p>
        </div>
      </div>
    </div>
  );
}

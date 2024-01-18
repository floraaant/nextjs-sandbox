import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="flex h-50 justify-between shrink-0 items-center text-white font-light rounded-lg bg-blue-500 p-4 ">
        {<AcmeLogo />}
        <p>Hey everybody!</p>
      </div>
    </main>
  );
}

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
    <div className="flex flex-col bg-blue-100 my-4 h50">
      <h1 className="font-serif font-bold text-xl m-auto my-4">Hey ça marche</h1>
      <p>text</p>
      <Link className='font-sans text-red-600 underline' href='/test'>Click here to change page</Link>
    </div>
    </main>
  );
}

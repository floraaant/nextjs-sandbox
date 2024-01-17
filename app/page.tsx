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
    <div className="flex flex-col bg-tahiti-600 my-4 h50">
      <h1 className="font-serif font-bold  md:text-md lg:text-2xl m-auto my-4">Hey ça marche</h1>
      <p>text</p>
      <Link className='font-sans text-red-600 underline' href='/test'>Click here to change page</Link>
    </div>
    <div className="md:columns-3 sm:columns-1 sm:w-full gap-6">
      <p className="w-full bg-tahiti-500">test</p>
      <p className="w-full bg-tahiti-500">test</p>
      <p className="w-full">test</p>
    </div>
    <div className="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p className="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
    </main>
  );
}

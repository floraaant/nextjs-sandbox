import { Metadata } from 'next';
import Action from './ui/center/actions';
import Informations from './ui/center/informations';

export const metadata: Metadata = {
  title: 'Home | Spotify',
  description: 'Spotify Front End Clone',
}


export default function Page() {
  return (
    <main className="flex flex-col my-2 w-full">
      <div className="flex flex-col h-50 justify-between shrink-0 items-center text-neutral-300 font-light rounded-lg bg-zinc-800 p-2 w-full">
        <Action />
        <Informations />
      </div>
    </main>
  );
}

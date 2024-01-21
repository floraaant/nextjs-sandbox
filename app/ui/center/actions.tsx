import { ArrowLeftIcon, ArrowRightIcon, BellAlertIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function Action(){
    return(
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-1">
            <div className="rounded-full flex items-center justify-center p-2 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
              <ArrowLeftIcon className='h-4' />
            </div>
            <div className="rounded-full flex items-center justify-center p-2 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
              <ArrowRightIcon className='h-4' />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="rounded-full flex items-center justify-center p-2 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
              <BellAlertIcon className='h-4' />
            </div>
            <div className="rounded-full flex items-center justify-center p-2 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
              <UsersIcon className='h-4' />
            </div>
            <div className="rounded-full flex items-center justify-center p-2 text-xs font-semibold cursor-pointer transition-colors bg-zinc-700 hover:bg-zinc-600">
                <Image 
                src={`/customers/steven-tey.png`}
                width={16}
                height={16}
                alt="Music cover"
                className="rounded-full"
                />
            </div>
          </div>
        </div>
    )
}
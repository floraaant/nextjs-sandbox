import { ArrowRightIcon, HomeIcon, MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Home() {
    return (
        <Link
            href="/"
            className="flex w-full h-10 rounded-md items-center px-4 text-sm font-medium text-neutral-300 transition-colors hover:bg-zinc-700 hover:text-neutral-50"
        >
            <HomeIcon className="h-5 md:mr-4" />
            <span className="hidden md:block">Accueil</span>
        </Link>
    );
}

export function Search() {
    return (
        <Link
            href="/"
            className="flex w-full h-10 rounded-md items-center px-4 text-sm font-medium text-neutral-300 transition-colors hover:bg-zinc-700 hover:text-neutral-50"
        >
            <MagnifyingGlassIcon className="h-5 md:mr-4" />
            <span className="hidden md:block">Rechercher</span>
        </Link>
    );
}

export function Library() {
    return (
        <div className="flex w-full h-10 rounded-md items-center ">
            <Link
                href="/"
                className=" flex text-sm font-medium px-4 transition-colors text-neutral-300 hover:text-neutral-50"
            >
                <ViewColumnsIcon className="h-5 md:mr-4" />
                <span className="hidden md:block">Bibliothèque</span>
            </Link>
            <div className="flex grow gap-4 justify-end pl-2 pr-2 transition-colors text-neutral-300">
                <PlusIcon className="h-5  hover:text-neutral-50 cursor-pointer" />
                <ArrowRightIcon className="h-5  hover:text-neutral-50 cursor-pointer" />
            </div>
        </div>

    );
}
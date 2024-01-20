import { ListBulletIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SortPlaylists() {
    return (
        <div className="flex w-full items-center transitions-colors justify-between text-neutral-300 px-2">
            <MagnifyingGlassIcon className="h-5 hover:text-neutral-50" />
            <div className="flex items-center gap-1">
                <p className="text-xs">Récents</p>
                <ListBulletIcon className="h-5" />
            </div>
        </div>
    )
}
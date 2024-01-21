import Image from 'next/image';

export default function Informations(){
    return(
        <div className="flex w-full my-12 items-end">
        <Image
          src={`/customers/evil-rabbit.png`}
          width={240}
          height={240}
          alt="Music cover"
          className="rounded-md"
        />
        <div className="flex flex-col items-start gap-2 pl-4 pb-2">
          <p className="text-xs">
            Playlist
          </p>
          <h1 className="text-6xl font-bold text-neutral-50">
            Titres likés
          </h1>
          <div className="flex gap-2 my-4 text-xs">
            <Image
              src={`/customers/steven-tey.png`}
              width={16}
              height={16}
              alt="Music cover"
              className="rounded-full object-cover"
            />
            <p className="font-bold">
              floraaant
            </p>
            <p>
              - 350 titres
            </p>
          </div>
        </div>
      </div>
    )
}
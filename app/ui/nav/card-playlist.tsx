import Image from "next/image";

const PlaylistCard = ({playlistName, playlistType, playlistContent}:
    {playlistName: string;
        playlistType: string;
        playlistContent: number;
    }) =>  {
    const images = ['amy-burns', 
    'balazs-orban', 
    'delba-de-oliveira', 
    'emil-kowalski',
    'evil-rabbit',
    'guillermo-rauch',
    'hector-simpson',
    'jared-palmer',
    'lee-robinson',
    'michael-novotny',
    'steph-dietz',
    'steven-tey'
]

    const chooseImage = () => {
        const indexAleatoire = Math.floor(Math.random() * images.length);
        const imageChoosed = images[indexAleatoire];
        return imageChoosed;
    }

    const image = chooseImage();

    return(
        <div className="flex w-full gap-2 rounded-md transition-colors flex-nowrap p-1.5 cursor-pointer hover:bg-zinc-700">
            <Image 
            src={`/customers/${image}.png`}
            width={40}
            height={40}
            alt="Music cover"
            className="rounded-md"
            />
            <div className="flex flex-wrap grow">
                <p className="text-sm w-full font-medium text-neutral-300">
                    {playlistName}
                </p>
                <div className="flex text-xs text-neutral-400 gap-1 items-center">
                    <p>{playlistType}</p>
                    •
                    <p>{playlistContent} titre(s)</p>
                </div>
            </div>
        </div>
        
    )
}

export default PlaylistCard;
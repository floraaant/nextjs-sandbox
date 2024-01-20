import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Home, Library, Search } from '@/app/ui/nav/icon-link';
import Themes from './nav/themes';
import SortPlaylists from './nav/sort-playlists';
import PlaylistCard from './nav/card-playlist';

export default function SideNav() {
  return (
    
    <div className="flex  flex-col bg-zinc-900">
      <div className="flex flex-wrap gap-1 m-2 bg-zinc-800 rounded-md max-h-full h-full overflow-hidden">
          <Home/>
          <Search />
      </div>
      <div className="flex grow flex-rowspace-x-2 gap-2 m-2 bg-zinc-800 rounded-md md:flex-col md:space-x-0 md:space-y-2">
        <Library />
        <Themes />
        <SortPlaylists />
        <div className="flex flex-col gap-1 px-2">
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          <PlaylistCard playlistName='Titres likés' playlistType='Playlist' playlistContent={350}/>
          <PlaylistCard playlistName='Dernières écoutes' playlistType='Playlist' playlistContent={50}/>
          <PlaylistCard playlistName='Work' playlistType='Playlist' playlistContent={48}/>
          
        </div>
      </div>
    </div>
  );
}

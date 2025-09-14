import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SKELETON_COLOR } from "../constants/constants";
import { USERNAME } from "../constants/constants";

function LastDotFm() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json&limit=1`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.recenttracks?.track?.length > 0) {
          const latest = data.recenttracks.track[0];
          setTrack({
            name: latest.name,
            artist: latest.artist["#text"]
          });
        }
      } catch (err) {
        console.error("Error fetching Last.fm data:", err);
      }
    };

    fetchNowPlaying();
  }, []);

  if (!track) return (
    <>
      <Skeleton borderRadius={7} height={112} baseColor={SKELETON_COLOR} />
    </>);

  return (
    <>
      <div className="flex gap-2 overflow-x-hidden border h-full p-5 rounded-lg bg-white text-white"
        style={{
          backgroundImage: `url(/penguinnnn.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="hidden border p-1 w-20 rounded-lg md:flex"
          style={{
            backgroundImage: `url(/penguinnnn.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
        </div>
        <div className="flex flex-col text-center justify-center md:text-start md:justify-start">
          <h1 className="text-[10px] truncate">
            Last.fm | last played song...
          </h1>
          <p className="text-[13px] font-bold">
            {track.name}
          </p>
          <h2 className="text-[10px]" >
            {track.artist}
          </h2>
        </div>
      </div>
    </>);
}

export default LastDotFm
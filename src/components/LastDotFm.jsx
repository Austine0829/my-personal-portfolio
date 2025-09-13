import { useState, useEffect } from "react";

function LastDotFm() {
  const [track, setTrack] = useState(null);
  const defaultMusicImage = "https://i.pinimg.com/736x/92/d5/8a/92d58a1bde04466605206e5748f2f501.jpg";

  const API_KEY = "7f311e9f684958c10d2849d5e6332864";
  const USERNAME = "Austine0829";

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
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

  if (!track) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center overflow-x-hidden border h-full p-5 rounded-lg bg-white text-white"
        style={{
          backgroundImage: `url(${defaultMusicImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
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
    </>);
}

export default LastDotFm
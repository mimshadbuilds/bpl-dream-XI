import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../../types/type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    playersPromise: Promise<PlayersType[]>;
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    }

export default function Players({ playersPromise, coin, setCoin }: PlayersProps) {
    const players = use(playersPromise);
    const [playerType, setPlayerType] = useState<'available' | 'selected'>('available');
    const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([]);

    const handleBtn = (type: "available" | "selected") => {
        setPlayerType(type)
    }
    return (
    <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="mb-4 text-2xl font-bold">
                    {
                    playerType === "available" 
                    ? "Available Players" 
                    : "Selected Players"
                    }
                </h2>
                <div>
                    <button
                    onClick={() => handleBtn("available")}
                    className={`btn ${ 
                    playerType === "available" 
                    ? "btn-warning" 
                    : "" 
                    } rounded-r-none cursor-pointer`}
                    >
                    Available
                    </button>
                    <button
                    onClick={() => handleBtn("selected")}
                    className={`btn ${
                    playerType === "selected" 
                    ? "btn-warning" 
                    : "" 
                    } rounded-l-none cursor-pointer`}
                >
                    Selected
                    </button>
                </div>
            </div>

            {playerType === "available"
                ? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                : <SelectedPlayers setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />}
        </div>
    </section>
);
}

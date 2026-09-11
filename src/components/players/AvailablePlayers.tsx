import type { Dispatch, SetStateAction } from "react";
import type {  PlayersType } from "../../types/type";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
    players: PlayersType[];
    coin: number; 
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayersType[]; 
    setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
}

export default function AvailablePlayers({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: AvailablePlayersProps) {

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {players.map((player) => (
                <PlayerCard key={player.playerName} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                ))}
        </div>
    );
}

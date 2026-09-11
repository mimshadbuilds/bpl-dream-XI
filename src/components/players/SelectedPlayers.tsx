import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../types/type";
import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({ setCoin, selectedPlayers, setSelectedPlayers }: {
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayersType[]; 
    setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
}) => {
    const handleRemove = (player: PlayersType) => {
    const filteredPlayer = selectedPlayers.filter(selectedPlayer => 
        selectedPlayer.playerName != player.playerName)

    setSelectedPlayers(filteredPlayer);
    setCoin((currentCoin) => currentCoin + player.price);
}
    return (
        <div className="mt-6 grid grid-cols-1 gap-3">
            {selectedPlayers.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/40 px-6 py-14 text-center">
                    <p className="text-lg font-semibold text-base-content/80">No players selected yet!</p>
                    <p className="mt-1 text-sm text-base-content/50">Choose players from the available list to build your Dream XI.</p>
                </div>
            ) : (
                selectedPlayers.map((player) => (
                    <SelectedPlayerCard
                        key={player.playerName}
                        player={player}
                        onRemove={handleRemove}
                    />
                ))
            )}
        </div>
    );
};

export default SelectedPlayers;

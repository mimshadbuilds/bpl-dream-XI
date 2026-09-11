import { FaCheck, FaFlag, FaStar, FaUser } from "react-icons/fa";
import type { PlayerCardProps } from "../../types/type";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function PlayerCard({ player, selected = false, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerCardProps) {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelection = () => {

        setIsSelected(true);
        const newPrice = coin - player.price;
            if(newPrice >= 0){
                setCoin(newPrice)
                toast.success(`${player.playerName} is purchased successfully!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            } else{
                toast.error('Error!! purchase player.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            }

    setSelectedPlayers([...selectedPlayers, player]);
}
    return (
    <>
        <article className="card w-full max-w-sm border border-base-300 bg-base-100 p-3 shadow-sm">
            <figure className="h-48 overflow-hidden rounded-xl sm:h-52">
                <img
                src={player.playerImg}
                alt={player.playerName}
                className="h-full w-full object-cover"
                />
            </figure>

            <div className="px-0 pt-3">
                <div className="flex items-center gap-3">
                <FaUser className="text-xl text-base-content" />
                <h2 className="text-lg font-bold">{player.playerName}</h2>
                </div>

                <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <FaFlag className="text-base-content/40" />
                    <span>{player.origin}</span>
                </div>
                <span className="badge badge-ghost px-3 py-3 text-xs font-medium">
                    {player.playerType}
                </span>
                </div>

                <div className="divider my-2" />

                <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Rating</span>
                <span className="flex items-center gap-1 font-medium">
                    <FaStar className="text-yellow-400" />
                    {player.rating}
                </span>
                </div>

                {player.battingStyle && (
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-semibold">Batting</span>
                    <span className="text-base-content/60">
                    {player.battingStyle}
                    </span>
                </div>
                )}

                {player.bowlingStyle && (
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-semibold">Bowling</span>
                    <span className="text-right text-base-content/60">
                    {player.bowlingStyle}
                    </span>
                </div>
                )}

                <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm font-bold">Price: ${player.price}</p>

                    <button
                        type="button"
                        onClick={handleSelection}
                        disabled={isSelected || coin < player.price}
                        className={`btn btn-sm ${
                        selected ? "btn-success text-white" : "btn"
                        }`}>
                        { isSelected === true ? (
                        <>
                            <FaCheck />
                            Selected
                        </>
                        ) : (
                        "Choose Player"
                        )}
                    </button>
                </div>
            </div>
        </article>
    </>
)};

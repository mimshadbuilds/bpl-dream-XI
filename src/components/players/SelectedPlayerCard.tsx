import type { PlayersType } from "../../types/type";
import { TbTrash } from "react-icons/tb";

const SelectedPlayerCard = ({ player, onRemove }: {
    player: PlayersType;
    onRemove: (player: PlayersType) => void;
}) => {
    return (
        <div className="group flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <img src={player.playerImg} alt={player.playerName} className="h-16 w-16 rounded-xl object-cover ring-1 ring-base-300 sm:h-20 sm:w-20" />
                <div>
                    <h2 className="truncate text-lg font-bold sm:text-xl">{player.playerName}</h2>
                    <p className="mt-1 text-sm font-medium text-base-content/60">{player.playerType}</p>
                    <p className="mt-1 text-xs font-semibold text-base-content/50">Price: ${player.price}</p>
                </div>
            </div>
            <button
                type="button"
                aria-label={`Remove ${player.playerName}`}
                title={`Remove ${player.playerName}`}
                onClick={() => onRemove(player)}
                className="btn btn-ghost btn-circle text-error hover:bg-error/10"
            >
                <TbTrash className="text-xl" />
            </button>
        </div>
    );
};

export default SelectedPlayerCard;

import type { Dispatch, SetStateAction } from "react";

export interface PlayersType {
    playerName: string;
    origin: string;
    playerImg: string;
    rating: number;
    playerType: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper";
    battingStyle: string | null;
    bowlingStyle: string | null;
    price: number;
}

export interface PlayerCardProps {
  player: PlayersType;
  selected?: boolean;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayersType[]; 
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
}
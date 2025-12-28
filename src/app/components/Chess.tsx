"use client";
import { BASE_URL } from "../chessStats";
import { useState, useEffect } from "react";


interface CardProps {
  title: string;
  content: string;
}

interface ChessStats {
  chess_blitz?: {
    last: { rating: number };
  };
  chess_rapid?: {
    last: { rating: number };
  };
  chess_bullet?: {
    last: { rating: number };
  };
  chess_daily?: {
    last: { rating: number };
  };
  chess960_daily?: {
    last: { rating: number };
  };
  puzzle_rush? :{
    best: {total_attempts: number};
  }
}

const ChessCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-xl p-4 shadow-lg bg-white max-w-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </div>
  );
};

export const ChessStatsDisplay: React.FC<{username:string}> = ({username}) => {
  const [stats, setStats] = useState<ChessStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(()=>{
    fetch(`${BASE_URL}/${username}/stats`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("Failed to fetch the user's chess.com stats")
      }
      return res.json();
    })
    .then((data)=>setStats(data))
    .catch((err:unknown)=>{
      if(err instanceof Error){
        setError(err.message);
      }
      else{
        setError("An error occurred")
      }
    })
  }, [username])
  if(error){
    return <p>An error occured. Here is the error {error}</p>
  }

  if (!stats) {
    return <p>Loading the players stats...</p>;
  }


  const chessContent = `
  Blitz ⚡: ${stats.chess_blitz?.last.rating ?? "N/A"} 
  Rapid ⏱️: ${stats.chess_rapid?.last.rating ?? "N/A"}
  Bullet 🚅: ${stats.chess_bullet?.last.rating ?? "N/A"}
  Daily ⏱️: ${stats.chess_daily?.last.rating ?? "N/A"}
  Daily960: ${stats.chess960_daily?.last.rating ?? "N/A"}
  Puzzle_Rush: ${stats.puzzle_rush?.best?? "N/A"}
  `

  return <ChessCard title={`${username}'s Chess.com stats`} content={chessContent}/>
}
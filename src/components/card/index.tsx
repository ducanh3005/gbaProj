import React from 'react';

interface GameCardProps {
  id: string;
  image: string;
  name: string;
  downloaded: number;
  downloadLink: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  image,
  name,
  downloaded,
  downloadLink,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      key={id}
      className="bg-white border border-gray-300 rounded-lg shadow-md text-left ml-3 mr-3 mb-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={`https://gba-proj-rom.vercel.app/${image}`}
        alt={name}
        className="rounded-t-lg h-48 w-full object-cover"
      />
      <div className="p-3">
        <h2 className="text-xl mt-2 mb-2">{name}</h2>
        <p className="text-gray-800 text-base mb-2">Downloaded: {downloaded}</p>
        <a
          href={downloadLink}
          className="bg-black text-white rounded-md cursor-pointer p-2 w-full text-center block"
        >
          Download Now
        </a>
      </div>
    </div>
  );
};

export default GameCard;

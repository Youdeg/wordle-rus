import React, { FC } from 'react';
import "./styles/tile.css";

type TileProps = {
    letter: string;
}

const Tile: FC<TileProps> = ({ letter }) => {

    return (<div className="tile">
        <h1>
            {letter}
        </h1>
    </div>)
}

export default Tile;
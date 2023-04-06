import React, { FC, useEffect, useState } from 'react';
import "./styles/letters-row.css";
import Tile from './Tile';

type LettersRowProps = {
    word: string;
}

const LettersRow: FC<LettersRowProps> = ({ word }) => {
    const [lettersArray, setLettersArray] = useState<string[]>(new Array(5).fill(' '));

    useEffect(() => {
        setLettersArray(word.split(''));
    }, [word])

    return (<div className="letters-row">
            {lettersArray.map(letter => <Tile letter={letter} />)}
    </div>)
}

export default LettersRow;
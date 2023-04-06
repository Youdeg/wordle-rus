import { FC, useState } from 'react';
import "./styles/tiles.css";
import LettersRow from './LettersRow';

const Tiles: FC = () => {
    const [words, setWords] = useState<string[]>(["СОСКА", "ГАЛКА", "ВОРОН"]);

    return (<div className="tiles">
        {words.map(word => <LettersRow word={word} />)}
          </div>)
}

export default Tiles;
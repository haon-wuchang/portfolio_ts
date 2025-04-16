import React from 'react';
import {CodingBar} from '@interfaces/common'

type CodingBar2Props = {
    code : CodingBar;
}

const CodingBar2: React.FC<CodingBar2Props> = ({code}) => {
    
    return (
        <>
            <div className="bar__metadata"><span>{code.title}</span><span>{code.percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width": `${code.percent}%`}}></div></div>
        </>
    );
}

export default CodingBar2;
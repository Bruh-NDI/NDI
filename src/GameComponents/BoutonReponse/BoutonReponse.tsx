import React from 'react';
import {boutonsReponses} from "../GameBar/data/data.ts";
import {Button} from "@mantine/core";

type BoutonReponseProps = {
    setEcolo: React.Dispatch<React.SetStateAction<number>>;
    setSocial: React.Dispatch<React.SetStateAction<number>>;
    setEconomie: React.Dispatch<React.SetStateAction<number>>;
    getEcolo: number;
    getSocial: number;
    getEconomie: number;
    id: number;
    setResponse: React.Dispatch<React.SetStateAction<boolean>>;
    setEndOfDiscussion: React.Dispatch<React.SetStateAction<boolean>>;
}

// ...

function BoutonReponse({setEcolo, setSocial, setEconomie, getEcolo, getSocial, getEconomie, id , setResponse, setEndOfDiscussion}: BoutonReponseProps) {

    const possibleResponses = boutonsReponses[id+1];
    const updateValue = () => {
        setEcolo(prevEcolo => prevEcolo + getEcolo);
        setSocial(prevSocial => prevSocial + getSocial);
        setEconomie(prevEconomie => prevEconomie + getEconomie);
        setEndOfDiscussion(true);
        setResponse(true);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            {possibleResponses.map((response, index) => (
                <Button
                    key={index}
                    onClick={updateValue}
                >response[text]</Button>
            ))}
        </div>
    );
}

export default BoutonReponse;

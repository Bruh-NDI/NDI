import React from 'react';
import {boutonsReponses} from "../GameBar/data/data.ts";
import {Button} from "@mantine/core";
import {ButtonResponse} from "./ButtonResponse.tsx";

type BoutonReponseProps = {
    setEcolo: React.Dispatch<React.SetStateAction<number>>;
    setSocial: React.Dispatch<React.SetStateAction<number>>;
    setEconomie: React.Dispatch<React.SetStateAction<number>>;
    id: number;
    setResponse: React.Dispatch<React.SetStateAction<boolean>>;
    setEndOfDiscussion: React.Dispatch<React.SetStateAction<boolean>>;
    reponseUser: React.Dispatch<React.SetStateAction<any[]>>;
    setDate: React.Dispatch<React.SetStateAction<number>>;
}



function BoutonReponse({setEcolo, setSocial, setEconomie, id , setResponse, setEndOfDiscussion, reponseUser, setDate}: BoutonReponseProps) {

    const possibleResponses = boutonsReponses[id+1];

    return (
        <div className="flex flex-col items-center justify-center absolute bottom-[110px] w-full zgeg">
            {possibleResponses.map((response, index) => (
                <ButtonResponse
                    key={index}
                    setResponse={setResponse}
                    setEndOfDiscussion={setEndOfDiscussion}
                    setEcologie={setEcolo}
                    setSocial={setSocial}
                    setEconomie={setEconomie}
                    reponseUser={reponseUser}
                    setDate={setDate}
                    button={response}
                ></ButtonResponse>
            ))}
        </div>
    );
}

export default BoutonReponse;

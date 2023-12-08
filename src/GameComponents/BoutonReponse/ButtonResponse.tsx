import React from "react";

type ButtonResponseProps = {
    setResponse: React.Dispatch<React.SetStateAction<boolean>>;
    setEndOfDiscussion: React.Dispatch<React.SetStateAction<boolean>>;
    setEcologie: React.Dispatch<React.SetStateAction<number>>;
    setSocial: React.Dispatch<React.SetStateAction<number>>;
    setEconomie: React.Dispatch<React.SetStateAction<number>>;
    button: ButtonProps;
    reponseUser: React.Dispatch<React.SetStateAction<any>>;
    setDate: React.Dispatch<React.SetStateAction<number>>;
};

export type ButtonProps = {
    text: string;
    id: string;
    date: number;
    getEcolo: number;
    getSocial: number;
    getEconomie: number;
    correct: boolean;
};

export function ButtonResponse({ setResponse, setEndOfDiscussion, setEcologie, setSocial, setEconomie, button, reponseUser, setDate } : ButtonResponseProps) {
    const updateValue = () => {
        setEcologie(prevEcologie => prevEcologie - button.getEcolo);
        setSocial(prevSocial => prevSocial + button.getSocial);
        setEconomie(prevEconomie => prevEconomie + button.getEconomie);
        reponseUser(prevReponseUser => [...prevReponseUser, button]);
        setDate(prevDate => prevDate + button.date);
        setResponse(true);
        setEndOfDiscussion(true);
    };

    return (
        <button id={button.id} onClick={updateValue}  className="transition-all duration-300 ease-in-out transform bg-amber-50 text-black m-1 rounded-md p-1 border-amber-600 border-2 hover:bg-amber-100 hover:scale-105">{button.text}</button>
    );

}
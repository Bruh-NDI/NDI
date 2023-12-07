import React from 'react';

type BoutonReponseProps = {
    setEcolo: React.Dispatch<React.SetStateAction<number>>;
    setSocial: React.Dispatch<React.SetStateAction<number>>;
    setEconomie: React.Dispatch<React.SetStateAction<number>>;
    getEcolo: number;
    getSocial: number;
    getEconomie: number;
    text: string;
    id: string;
}

function BoutonReponse({ setEcolo, setSocial, setEconomie, getEcolo, getSocial, getEconomie, text, id }: BoutonReponseProps) {
    const updateValue = () => {
        setEcolo(prevEcolo => prevEcolo + getEcolo);
        setSocial(prevSocial => prevSocial + getSocial);
        setEconomie(prevEconomie => prevEconomie + getEconomie);
    };

    return (
        <>
            <button id={id} onClick={updateValue}>{text}</button>
        </>
    );
}

export default BoutonReponse;

import {Discussion} from "../../GameComponents/Discussion/Discussion.tsx";
import {GameBar} from "../../GameComponents/GameBar/GameBar.tsx";
import {Sprite} from "../../GameComponents/Sprite/Sprite.tsx"
import React, {useState} from "react"

type Scene = {
    setEuro: React.Dispatch<React.SetStateAction<number>>;
    euro: number;
    endOfDialogue: boolean;
    setEndOfDialogue: React.Dispatch<React.SetStateAction<boolean>>;
}

function Scene({setEuro, euro, endOfDialgue, setEndOfDialogue}: Scene) {
    const dialogues = [
        {text: "Bonjour, monsieur le president", nomPersonnage: "Premier Ministre", id: "1"},
        {text: "Bonjour, monsieur le premier ministre", nomPersonnage: "President", id: "2"},
        {
            text: "La demande en énergie de votre ville est croissante. Comment souhaitez-vous répondre à cette demande tout en minimisant l'impact environnemental ?",
            nomPersonnage: "Premier Ministre",
            id: "3"
        },
    ]
    const boutonsReponses = [
        {
            text: "Investir massivement dans les énergies renouvelables.",
            id: "reponse1",
            getEcolo: 0,
            getSocial: 0,
            getEconomie: 0
        },
        {
            text: "Continuer à dépendre des combustibles fossiles pour maintenir la stabilité économique.",
            id: "reponse2",
            getEcolo: 0,
            getSocial: 0,
            getEconomie: 0
        },
        {
            text: " Encourager la conservation d'énergie sans investir dans de nouvelles sources.",
            id: "reponse3",
            getEcolo: 0,
            getSocial: 0,
            getEconomie: 0
        },
    ]
    return (
        <>
            <Discussion array={dialogues}/>
            {endOfDialogue && <BoutonReponse array={boutonsReponses} setEuro={setEuro} euro={euro}/>}
        </>
    )
}

export default function Game() {
    const [euro, setEuro] = useState(0)
    const [co2, setCO2] = useState(0)
    const [path] = "/images/president.png"
    const [endOfDialogue, setEndOfDialogue] = useState(false)

    return (
        <>
            <GameBar euro={euro} co2={co2}/>
            <Sprite id={"president"} path={path} alt={"Un monsieur important"}/>
            <Scene setEuro={setEuro} euro={euro} endOfDialogue={endOfDialogue} setEndOfDialogue={setEndOfDialogue}/>
            <footer
                className="fixed bottom-0 container mx-auto flex items-end w-full bg-emerald-100 text-white rounded-lg bg-opacity-75 bg-blur backdrop-blur-md border-b-emerald-400">
                <Discussion nomPersonnage="President" question="Quel est ton nom ?" id="question"/>
                <button onClick={() => setEuro(euro + 1)}>Ajouter 1€</button>
                <button onClick={() => setCO2(co2 + 1)}>Ajouter 1kg/Atmos</button>
            </footer>
        </>
    )
}